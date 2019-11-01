//Fix issue with SCORE

import React from "react";
import { quizData } from "./quizData";
import "./quizStyle.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Axios from "axios";

class MainQuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 0,
      disabled: true,
      isEnd: false,
      wrongAnswers: [],
      quiz:[]
    };
  }

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: this.state.quiz[this.state.currentQuestion].question,
        answer: this.state.quiz[this.state.currentQuestion].answer,
        options: [this.state.quiz[this.state.currentQuestion].ans1,this.state.quiz[this.state.currentQuestion].ans2,this.state.quiz[this.state.currentQuestion].ans3,this.state.quiz[this.state.currentQuestion].ans4]
      };
    });
  };

  componentDidMount() {
    console.log(this.props.courseId)
    Axios.get('http://localhost:5000/api/quiz/'+this.props.courseId+'/'+this.props.unitId).then(response =>{
      if(response.status==200){
        this.setState({
          quiz:response.data
        });
        this.loadQuizData();
      }
    })
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score, wrongAnswers } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    } else {
      wrongAnswers.push(this.state.currentQuestion);
      this.setState({
        wrongAnswers: wrongAnswers
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
    console.log(this.state.wrongAnswers);
  };
  finishHandler = () => {
    if (this.state.currentQuestion === this.state.quiz.length -1) {
      this.setState({
        isEnd: true
      });
    }
  };

  getBackgroundColor = index => {
    if (this.state.wrongAnswers.includes(index)) {
      return "#ff9696";
    } else {
      return "#89ff7c";
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>
            End of the quiz your Final score is {this.state.score} points{" "}
          </h3>
          <p>
            The correct answer's for the questions were
            <ul>
              {quizData.map((item, index) => (
                <li
                  className="options"
                  key={index}
                  style={{
                    backgroundColor: this.getBackgroundColor(index),
                    margin: "10px"
                  }}
                >
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h5>{this.state.questions} </h5>
          <span>{`Questions ${currentQuestion + 1}  out of ${
            quizData.length
          } `}</span>
          {options.map(option => (
            <Card style={{ margin: "10px", fontSize: "13px" }}>
              <CardContent>
                <p
                  key={option.id}
                  className={`options
         ${myAnswer === option ? "selected" : null}
         `}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>
              </CardContent>
            </Card>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <Button
              style={{ margin: "30px" }}
              variant="contained"
              color="primary"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </Button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.finishHandler}
            >
              Finish
            </Button>
          )}
        </div>
      );
    }
  }
}

export default MainQuizComponent;

import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { MDBView, MDBMask } from
"mdbreact";
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (<div>
        <br/>
        <br/>
        <br/>
        <br/> 
      <table cellPadding="30"><th><tr><td>
    <Card style={{ width: '18rem', height: '24rem' }}>
    <MDBView>
              <img height="185" className="d-block w-100" src="http://s3.amazonaws.com/bizenglish/wp-content/uploads/2019/03/28132918/KING-LONG-bus.jpg" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
  <Card.Body>
    <Card.Title>Buy Tickets</Card.Title>
    <Card.Text>
    Book Buses
    <br/>
    <br/>
      
  </Card.Text>
    <Link to="/booklist"><Button className="btn green darken-3">Book</Button></Link>
  </Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://www.consumerguide.sg/wp-content/uploads/Couple-travelling-flipped.jpg" alt="Second slide" />
              <MDBMask overlay="black-light" />
            </MDBView>

<Card.Body>
  <Card.Title>Train Details</Card.Title>
  <Card.Text>
   Expore the Prices of Bus Tickets and details of Buses
  </Card.Text>
  <Link to="/bus"><Button className="btn green darken-3">See Details</Button></Link>
</Card.Body>
</Card>

</td></tr><th></th></th>
<th><tr><td>
<Card style={{ width: '18rem' }}>
<MDBView>
              <img className="d-block w-100" src="https://media.self.com/photos/5b048339fb856d7d3d02375d/4:3/w_752,c_limit/first-backpacking-trip.jpg" alt="Therid slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
<Card.Body>
  <Card.Title>About Us</Card.Title>
  <Card.Text>
    Want to know who we are ? 
  </Card.Text>
  <Link to="/about"><Button className="btn green darken-3">Learn</Button></Link>
</Card.Body>
</Card>

</td></tr><th></th></th><tr></tr>

</table>
</div>
  
    );
  }
}

export default Home;
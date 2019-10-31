import React, { Component } from 'react';
import UserItem from './UserItem';
import { db } from '../services/firebase'


class UserList extends Component{
    constructor(){
        super();
        this.state = {
            uses: null
        }
    }

    
    componentDidMount(){

        this.getBus();
    }
    
    getBus(){
        console.log('Mounted')
       
       // db.collection('Buses')
        //  .get()
        //  .then(    snapshot => {
         //     const busses = []
         //     snapshot.forEach( doc =>{
          //        const data = doc.data()
          //        busses.push(data)
           //   })
           //   this.setState({   busses: busses})
           //   console.log(snapshot)
         // })
        //  .catch(   error => console.log(error))
    }


  



    render(){
        
        const UserItems = this.state.uses && 
        this.state.uses.map(  user =>{ 
            return(
               <UserItem key={user.uid}  item={user}/>
            )
        })
        return(
            <div>
                
                <br/>
                <br/> 
                <ul class="collection with-header">
                <li class="collection-header"><h4>Choose a User</h4></li>
                    {UserItems}
                </ul>
            </div>

        )
    }
}

export default UserList;
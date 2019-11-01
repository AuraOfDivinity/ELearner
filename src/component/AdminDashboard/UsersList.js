import React, { Component } from 'react';
import UserItem from './UserItem';
import { db } from '../services/firebase'
import Axios from 'axios';


class UserList extends Component {
    constructor() {
        super();
        this.state = {
            uses: null
        }
    }


    componentDidMount() {
        const uid = localStorage.getItem('uid');
        console.log(uid);
        Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
          if (response.status != 200) window.location = '/Login';
        }).catch(e=>{
          window.location = '/Login';
        })
        this.getBus();
    }

    getBus() {
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






    render() {

        const UserItems = this.state.uses &&
            this.state.uses.map(user => {
                return (
                    <UserItem key={user.uid} item={user} />
                )
            })
        return (
            <div>

                <br />
                <br />
                <ul class="collection with-header">
                    <li class="collection-header"><h4>Choose a User</h4></li>
                    {UserItems}
                </ul>
            </div>

        )
    }
}

export default UserList;
import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="green darken-3">
                <div class="nav-wrapper">
                <Link to='/' class="brand-logo center">E-Learning Portal</Link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/booklist'>BOOK</Link></li>
        <li><Link to='/Bus'>TIME TABLE</Link></li>
        <li><Link to='/Bus'>CONTACT US</Link></li>
        
      </ul>
    </div>
      
    <ul class="sidenav" id="mobile-demo">
    <li><Link to='/'>HOME</Link></li>
        <li><Link to='/booklist'>BOOK</Link></li>
        <li><Link to='/Bus'>TIME TABLE</Link></li>
        <li><Link to='/Bus'>CONTACT US</Link></li>
    
  </ul>
   
  </nav>
  
          
  
            </div>
        )
    }

}




export default Nav;
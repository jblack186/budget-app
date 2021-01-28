import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog, faSignOutAlt, faSignInAlt  } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {


  return (
    <React.Fragment>
      <div className='navbar-container'>
        <ul>
          <li>
            <FontAwesomeIcon style={{color: '#076E8E'}} className='home-icon' icon={faHome} />
            <p>Home</p>
          </li>
          <li>
            <FontAwesomeIcon style={{color: '#076E8E'}} className='home-icon' icon={faUser} />
            <p>Account</p>
          </li>
          <li>
            <FontAwesomeIcon style={{color: '#076E8E'}} className='home-icon' icon={faCog} />
            <p>Settings</p>
          </li>
          <li>
            <FontAwesomeIcon style={{color: '#076E8E'}} className='home-icon' icon={faSignInAlt} />
            <p>Sign in</p>
          </li>
          <li>
            <FontAwesomeIcon style={{color: '#076E8E'}} className='home-icon' icon={faSignOutAlt} />
            <p>Sign out</p>
          </li>

        </ul>
      </div>

    </React.Fragment>
    
  )

}


export default Navbar;

import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog, faSignOutAlt, faSignInAlt  } from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {


  return (
    <React.Fragment>
        <ul>
        <div className={props.dark === true ? 'navbar-container dark' :  'navbar-container'}>
        <div className={props.dark === true ? 'logo dark' : 'logo'}>
        <svg width="50" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="88" height="84">
                                <rect width="88" height="84" rx="42" fill="#00303F" />
                            </mask>
                            <g mask="url(#mask0)">
                                <rect width="69.2338" height="30" transform="matrix(0.853237 -0.521524 0.564608 0.825359 12 11.1072)" fill={props.dark === true ?"white" :"#00303F"} />
                                <rect width="75.9478" height="30" transform="matrix(0.853237 -0.521524 0.564608 0.825359 3 83.6086)" fill={props.dark === true ?"white" :"#00303F"} />
                            </g>
                        </svg>
                        <h1>in-hand.IO</h1>
                        </div>
          <li>
            <FontAwesomeIcon className={props.dark ? 'home-icon-dark' : 'home-icon'}  icon={faHome} />
            <p>Home</p>
          </li>
          <li>
            <FontAwesomeIcon  className={props.dark ? 'home-icon-dark' : 'home-icon'} icon={faUser} />
            <p>Account</p>
          </li>
          <li>
            <FontAwesomeIcon   className={props.dark ? 'home-icon-dark' : 'home-icon'}icon={faCog} />
            <p>Settings</p>
          </li>
          <li>
            <FontAwesomeIcon   className={props.dark ? 'home-icon-dark' : 'home-icon'} icon={faSignInAlt} />
            <p>Sign in</p>
          </li>
          <li>
            <FontAwesomeIcon   className={props.dark ? 'home-icon-dark' : 'home-icon'} icon={faSignOutAlt} />
            <p>Sign out</p>
          </li>
          </div>

        </ul>

    </React.Fragment>
    
  )

}


export default Navbar;

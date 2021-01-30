import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog, faSignOutAlt, faSignInAlt, faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';


const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  console.log('open', open)
const openOrClose = () => {
  setOpen(!open)


 
}

const close = () => {
  setOpen(false)

}





  return (
    <React.Fragment>
      {/* Dark mode is conditionally set by props.dark. This state is set in the dashboard page */}
          <div className={props.dark === true ? 'navbar-side-container dark' :  'navbar-side-container'}>
            <div className='nav-slide-flex'>
            <p>Menu</p>
            <FontAwesomeIcon  className='menu-bars' onClick={openOrClose} icon={faBars} />
            </div>
         {/* Sliding nav is here. Contionally renders by the 'open' state */}

            {open === true ? <div
            >
           
           <motion.div 
                initial={{x: -800}}
                animate={{x: 0}}
                transition={{duration: .5}}
            
             className='nav-items'>
              <FontAwesomeIcon className='nav-close' onClick={close} icon={faTimes} />

               <div className='top-slide-nav'>
               <img src='/logo.svg' alt='logo in side nav' />
               <p>in-Hand.io</p>
               </div>
              <ul>
                <li className='fist-item'>
                <FontAwesomeIcon className='nav-slide-list-icon'  icon={faHome} />

                    Home
                  </li>
                  <li>
                  <FontAwesomeIcon className='nav-slide-list-icon'  icon={faUser} />

                  Account
                  </li>
                  <li>
                  <FontAwesomeIcon className='nav-slide-list-icon'  icon={faSignInAlt} />

                    Sign in
                  </li>
                  <li>
                  <FontAwesomeIcon className='nav-slide-list-icon'  icon={faSignOutAlt} />

                    Sign out
                  </li>
                </ul>
            </motion.div>
            <motion.div 
                 initial={{y: -800}}
                 animate={{y: 0}}
                 transition={{delay:.4, duration: .5}}
            
            onClick={close} className='half-nav'></motion.div>
            </div> : null}
           
          </div>
        
        <ul>
        <div className={props.dark === true ? 'navbar-container dark' :  'navbar-container'}>
        <motion.div 
       animate={{
       
        rotate: [0, 360, 360, 0],
        
      }}     
        className={props.dark === true ? 'logo dark' : 'logo'}>
          {/* put this svg in a file */}
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
                       </motion.div>
                       
          <motion.li
          className='nav-list-item'
                    initial={{x: -300}}
          animate={{x: 0 }}
          transition={{duration: 1}}

          >
            <FontAwesomeIcon className={props.dark ? 'home-icon dark' : 'home-icon'}  icon={faHome} />
            <p>Home</p>
          </motion.li>
          <motion.li
          className='nav-list-item'
                    initial={{x: -300}}
          animate={{x: 0 }}
          transition={{duration: 1}}

          >
            <FontAwesomeIcon  className={props.dark ? 'home-icon dark' : 'home-icon'} icon={faUser} />
            <p>Account</p>
          </motion.li>
          <motion.li
          className='nav-list-item'
          initial={{x: -300}}
          animate={{x: 0 }}
          transition={{duration: 1}}

          >
            <FontAwesomeIcon   className={props.dark ? 'home-icon dark' : 'home-icon'} icon={faSignInAlt} />
            <p>Sign in</p>
          </motion.li>
          <motion.li
          className='nav-list-item'
          initial={{x: -300}}
          animate={{x: 0 }}
          transition={{duration: 1}}

          >
            <FontAwesomeIcon   className={props.dark ? 'home-icon dark out' : 'home-icon out'} icon={faSignOutAlt} />
            <p>Sign out</p>
          </motion.li>
          </div>

        </ul>

    </React.Fragment>
    
  )

}


export default Navbar;

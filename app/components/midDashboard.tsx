import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faHome, faShoppingBag, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';


const MidDashboard = (props) => {


  return (
    <React.Fragment>
      <motion.div
        initial={{ x: 1300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}

        className='mid-dash-container'>
        <div className='mid-dash'>
          <div className='mid-dash-flex'>
            <div className='needs-container'>
              <p className='category'>Needs</p>
              <div className='needs-info'>
                <p>80%</p>
                <p className='needs-category'>housing</p>
              </div>
              <p className='total-needs'>Total needs: $2,489,71</p>
            </div>
            <div className='card-icons'>
              <FontAwesomeIcon style={{ color: '#222831', fontSize: '1.3rem', cursor: 'pointer' }} icon={faHome} />
              <FontAwesomeIcon style={{ color: 'gray', fontSize: '1.3rem', cursor: 'pointer' }} icon={faEllipsisV} />

            </div>
          </div>
        </div>
        <div className='mid-dash'>
          <div className='mid-dash-flex'>
            <div className='needs-container'>
              <p className='category'>Wants</p>
              <div className='needs-info'>
                <p>4%</p>
                <p className='needs-category'>cable</p>
              </div>
              <p className='total-needs'>Total wants: $1,261,92</p>
            </div>
            <div className='card-icons'>
              <FontAwesomeIcon style={{ color: '#00303F', fontSize: '1.3rem', cursor: 'pointer' }} icon={faShoppingBag} />
              <FontAwesomeIcon style={{ color: 'gray', fontSize: '1.3rem', cursor: 'pointer' }} icon={faEllipsisV} />

            </div>
          </div>
        </div>
        <div className='mid-dash'>
          <div className='mid-dash-flex'>
            <div className='needs-container'>
              <p className='category'>Savings</p>
              <div className='needs-info'>
                <p>11%</p>
                <p className='needs-category'>of budget</p>
              </div>
              <p className='total-needs'>Total savings: $489,22</p>
            </div>
            <div className='card-icons'>
              <FontAwesomeIcon style={{ color: '#43D8C9', fontSize: '1.3rem', cursor: 'pointer' }} icon={faDollarSign} />
              <FontAwesomeIcon style={{ color: 'gray', fontSize: '1.3rem', cursor: 'pointer' }} icon={faEllipsisV} />

            </div>
          </div>
        </div>

      </motion.div>

    </React.Fragment>
  )

}


export default MidDashboard;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faHome, faShoppingBag, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MidDashboard = (props) => {

  const needsPercentage = 50;
  const wantsPercentage = 39;
  const savingsPercentage = 11;


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
              <p className='needs-category'>Standard</p>
            </div>
            <p className='total-needs'>Total needs: $1,761.67</p>
          </div>
          <div className='card-icons'>
            <div className='percent-circle'>
            <CircularProgressbar  
             styles={buildStyles({
          textColor: "black",
          pathColor: "#00303F",
          
        })}
            strokeWidth={4} value={needsPercentage} text={`${needsPercentage}%`} />
            </div>

          </div>
        </div>
        </div>
      <div className='mid-dash'>
        <div className='mid-dash-flex'>
          <div className='needs-container'>
            <p className='category'>Wants</p>
            <div className='needs-info'>
              <p className='wants-category'>Too High</p>
            </div>
            <p className='total-needs'>Total wants: $1,374.10</p>
          </div>
          <div className='card-icons'>
            <div className='percent-circle'>
            <CircularProgressbar  
             styles={buildStyles({
          textColor: "black",
          pathColor: "#00303F",
          
        })}
            strokeWidth={4} value={wantsPercentage} text={`${wantsPercentage}%`} />
            </div>

          </div>
        </div>
      </div>
      <div className='mid-dash'>
        <div className='mid-dash-flex'>
          <div className='needs-container'>
            <p className='category'>Savings</p>
            <div className='needs-info'>
              <p className='savings-category'>Too Low</p>
            </div>
            <p className='total-needs'>Total savings: $387.57</p>
          </div>
          <div className='card-icons'>
            <div className='percent-circle'>
            <CircularProgressbar  
             styles={buildStyles({
          textColor: "black",
          pathColor: "#00303F",
          
        })}
            strokeWidth={4} value={savingsPercentage} text={`${savingsPercentage}%`} />
            </div>


          </div>
        </div>
      </div>

      </motion.div>

    </React.Fragment >
  )

}


export default MidDashboard;

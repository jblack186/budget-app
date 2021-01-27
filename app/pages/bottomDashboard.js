import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSortDown, faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons'



const bottomDashboard = () => {


  return (
    <React.Fragment>
      <div className='bottom-dash-container'>
        <div className='left-bottom-dash'>
          <div className='top-left-bottom-dash'>
            <p className='latest-label'>Latest transactions</p>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />

          </div>
          <div className='bottom-left-bottom-dash'>
            <p className='date'>Today</p>
            <p className='where'>Starbucks Cafe</p>
            <p className='payment'>Card payment</p>
            <p className='transaction-category'>Food</p>
            <p className='cost'>$12,52</p>
            <FontAwesomeIcon className='arrow-down-icon' icon={faSortDown} />
          </div>
          <div className='bottom-left-bottom-dash'>
            <p className='date'>Today</p>
            <p className='where'>Target</p>
            <p className='payment'>Card payment</p>
            <p className='transaction-category'>Clothes</p>
            <p className='cost'>48,43</p>
            <FontAwesomeIcon className='arrow-down-icon' icon={faSortDown} />
          </div>
          <div className='bottom-left-bottom-dash'>
            <p className='date'>Today</p>
            <p className='where'>Rhapsody</p>
            <p className='payment'>Card payment</p>
            <p className='transaction-category'>Entertainment</p>
            <p className='cost'>$9,64</p>
            <FontAwesomeIcon className='arrow-down-icon' icon={faSortDown} />
          </div>
          <div className='bottom-left-bottom-dash'>
            <p className='date'>Today</p>
            <p className='where'>Walgreens</p>
            <p className='payment'>Card payment</p>
            <p className='transaction-category'>Pharmacy</p>
            <p className='cost'>$22,74</p>
            <FontAwesomeIcon className='arrow-down-icon' icon={faSortDown} />
          </div>
          <div className='bottom-left-bottom-dash'>
            <p className='date'>Today</p>
            <p className='where'>Panera</p>
            <p className='payment'>Card payment</p>
            <p className='transaction-category'>Food</p>
            <p className='cost'>$18,19</p>
            <FontAwesomeIcon className='arrow-down-icon' icon={faSortDown} />
          </div>
          <div className='more'>
            <p>See more</p>
            <FontAwesomeIcon className='arrow-right-icon' icon={faLongArrowAltRight} />
          </div>
        </div>
        <div className='right-bottom-dash'>

        </div>
      </div>
     
    </React.Fragment>
  )

}


export default bottomDashboard;

import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSortDown, faLongArrowAltRight, faDotCircle  } from '@fortawesome/free-solid-svg-icons';
import { PieChart } from 'react-minimal-pie-chart';
 



const bottomDashboard = () => {


  return (
    <React.Fragment>
      <div className='bottom-dash-container'>
        <div className='left-bottom-dash-flex'>
        <div className='left-bottom-dash'>
          <div className='top-left-bottom-dash-label'>
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
            <p className='transaction-category'>Entert..</p>
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
        </div>
        <div className='right-bottom-dash'>
          <div className='top-right-bottom-dash'>

          <div className='top-right-bottom-dash-label'>
              <p className='latest-label'>Budget snapshot</p>
              <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />

            </div>
            <div className='bottom-right-bottom-dash'>
              <div>
                <p className='period'>Daily</p>
                <p className='expenses'>$324,21</p>
              </div>
              <div>
                <p className='period'>Weekly</p>
                <p className='expenses'>$1354,21</p>
              </div>
              <div>
                <p className='period'>Monthly</p>
                <p className='expenses'>$7,324,63</p>
              </div>
            </div>
          <div className='expense-visual'>
            <p className='snapshot-text'>Where your at this month</p>
            <div className='pie-chart'>
              <PieChart
              style={{width: '150px'}}
                data={[
                  { title: 'One', value: 10, color: '#43D8C9' },
                  { title: 'Two', value: 15, color: '#076E8E' },
                  { title: 'Three', value: 20, color: '#222831' },
                ]}
              />
            <div>
                <div className='visual-flex'>
                <FontAwesomeIcon style={{color: '#43D8C9'}} className='arrow-down-icon' icon={faDotCircle} />
                  <p>Needs</p>
                </div>
                <div className='visual-flex'>
                <FontAwesomeIcon style={{color: '#076E8E'}}  className='arrow-down-icon' icon={faDotCircle} />
                  <p>Wants</p>
                </div>
                <div className='visual-flex'>
                <FontAwesomeIcon style={{color: '#222831'}}  className='arrow-down-icon' icon={faDotCircle} />
                  <p>Savings</p>
                </div>
            </div>    
          </div>       
          </div>
         </div>
        </div>
      </div>
     
    </React.Fragment>
  )

}


export default bottomDashboard;

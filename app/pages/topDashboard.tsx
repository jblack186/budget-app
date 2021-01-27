import React,{useState} from 'react';
import Calendar from 'react-calendar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const topDashboard = () => {
  const [value, onChange] = useState(new Date());


  return (
    <React.Fragment>
      <section className='top-dash-container'>
        <div className='left-top-dash'>
          <div className='left-top-dash-flex'>
            <div className='main-account-container'>
              <p className='main-account'>Main account</p>
              <p className='user-bank'>People's United Bank</p>
              <p className='account-number'>88 1240 7793 3667 0002 9448</p>
              <div className='main-account-buttons'>
                <button className='spending-button'>See spending</button>
                <button>Switch account</button>
              </div>
            </div>
            <div className='funds'>
              <p className='available'>Available funds</p>
              <p>68.789,56</p>
            </div>
          </div>
        </div>
        <div className='right-top-dash'>
        <div className='calendar-container'>
        <Carousel interval={2000} infiniteLoop={true} showStatus={false} showArrows={true} showIndicators={true} showThumbs={false} autoPlay >
          <Calendar
          onChange={onChange}
          value={value}
        />
        <div className='calendar-content'>
          <div className='calendar-flex'>
          <h3>Plan ahead</h3>
          <p>Keep your eyes on the prize and set your saving goals here. Use the calendar to save up for your next vacation or a rainy day.</p>
          <button className='set-goals'>Set goals</button>
          </div>
          <img id='calendar' src='./calendar.png' alt='calendar' />
        </div>
        </Carousel>
      </div>
        </div>
      </section>
    
   
    </React.Fragment>
  )

}


export default topDashboard;

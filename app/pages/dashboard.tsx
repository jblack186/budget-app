import React,{useState} from 'react';
import TopDashboard from './topDashboard';
import MidDashboard from './midDashboard';
import Bottomdashboard from './bottomDashboard';
import Navbar from './navbar';



const Dashboard = () => {


  return (
    <React.Fragment>
      <div className='full-dashboard-contain'>
        <section className='stock-bar'>

<div className="ticker-wrap">
<div className="ticker">
  <div className="ticker__item">Letterpress chambray brunch.</div>
  <div className="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
  <div className="ticker__item">Ugh PBR&B kale chips Echo Park.</div>
  <div className="ticker__item">Gluten-free mumblecore chambray mixtape food truck.
  </div>
  </div>
  </div>

        </section>
        <div className='nav-dash'>
          <div className='nav-holder'>
            <Navbar />
          </div>
          <section className='dashboard-container'>
            <TopDashboard />
            <MidDashboard />
            <Bottomdashboard />
          </section>
        </div>
      </div>
    </React.Fragment>
    
  )

}


export default Dashboard;

import React,{useState} from 'react';
import TopDashboard from './topDashBoard';
import MidDashboard from './midDashboard';



const Dashboard = () => {


  return (
    <React.Fragment>
      <TopDashboard />
      <MidDashboard />
    </React.Fragment>
  )

}


export default Dashboard;

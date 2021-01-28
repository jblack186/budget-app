import React,{useState, useEffect} from 'react';
import TopDashboard from './topDashboard';
import MidDashboard from './midDashboard';
import Bottomdashboard from './bottomDashboard';
import Navbar from './navbar';



const Dashboard = () => {
  const [dark, setDark] = useState(false);
  const [text, setText] = useState('Light mode');
console.log(dark)
const mode = () => {
  setDark(!dark);
  console.log(dark)
}

useEffect(() => {
  if (dark) {
    document.body.style.background = '#040305'
    setText('Dark mode')
  } else if(!dark){
    document.body.style.background = '#F8F8F8'
    setText('Light mode')

  } else {
    null
  }

}, [dark])

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
          <section className={!dark ? 'dashboard-container' : 'dashboard-container-dark'}>
          <div className='mode-container'>
          <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button r" id="button-4">
          <input onClick={mode} type="checkbox" className="checkbox"></input>
          <div className="knobs"></div>
          <div className="layer"></div>
      
     </div>
   </div>
    </div>
  <p className='modes'>{text}</p>
    </div>

    
                <TopDashboard dark={dark} />
            <MidDashboard dark={dark} />
            <Bottomdashboard dark={dark} />
          </section>
        </div>
      </div>
    </React.Fragment>
    
  )

}


export default Dashboard;

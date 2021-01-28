import React,{useState, useEffect} from 'react';
import TopDashboard from './topDashboard';
import MidDashboard from './midDashboard';
import Bottomdashboard from './bottomDashboard';
import Navbar from './navbar';



const Dashboard = ({news}) => {
  const [dark, setDark] = useState(false);
  const [text, setText] = useState('Light mode');
console.log('news', news)

const article =  news.docs.map(art => {
  if (art.abstract) {
    
   return art.abstract }
})

const url =  news.docs.map(art => {
  if (art.web_url) {
    
   return art.web_url }
})



const mode = () => {
  setDark(!dark);
  console.log(dark)
}
//Settting dark or light mode when 'dark' state is called
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
      {/* News bar */}
        <section className='stock-bar'>
          <div className="ticker-wrap">
            <div className="ticker">
            <a href={url[0]}><div className="ticker__item">{article[0]}<span className='ticker-text'>click to read</span></div></a>
            <a href={url[1]}><div className="ticker__item">{article[1]}<span className='ticker-text'>click to read</span></div></a>
            <a href={url[2]} className='ticker-text'><div className="ticker__item">{article[2]}<span className='ticker-text'>click to read</span></div></a>
              <a href={url[3]}><div className="ticker__item">{article[3]}<span className='ticker-text'>click to read</span></div></a>
            </div>
          </div>
        </section>
        <div className='nav-dash'>
          <div className='nav-holder'>
            <Navbar dark={dark} />
          </div>
          {/* Light and Dark Mode Button */}
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
            <div className='dash-labels'>
              <p className='dash-account'>Account</p>
              <p className='dash-calendar'>Calendar</p>
            </div>
            <TopDashboard />
            <div className='dash-labels'>
              <p>Monitoring</p>
            </div>
            <MidDashboard dark={dark} />
            <div className='dash-labels'>
              <p>Transactions</p>
            </div>
            <Bottomdashboard dark={dark} />
          </section>
        </div>
      </div>
    </React.Fragment>
    
  )

}
//Getting news from nytimes api
Dashboard.getInitialProps = async (ctx) => {
  const {query} = ctx
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=financial&api-key=9cD9AxIl2LjbhsKBMQE11D1y5vAjuxzf&facet_fields=source&facet=true&begin_date=20200101&end_date=20200831
  ` );
  const data = await res.json();

  return {news: data.response}

}


export default Dashboard;

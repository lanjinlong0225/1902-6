import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/css/choose.scss';

class App extends React.Component{
  render () {
    return (
      <div className = 'box'>
        <header className = 'header'>
          <div className = 'header-nav'>
            <ul>
              <li><NavLink to = '/choose/circle'>圈子</NavLink></li>
              <li><NavLink to = '/choose/concern'>关注</NavLink></li>
              <li><NavLink to = '/choose/newest'>最新</NavLink></li>
              <li><NavLink to = '/choose/hot'>热门</NavLink></li>
              <li><NavLink to = '/choose/rec'>推荐</NavLink></li>
            </ul>
          </div>
        </header>
        <div className = "content">
          <div className = 'content-tab'>
              <ul>
                <li>我的圈子</li>
                <li>更多圈子</li>
              </ul>
            </div>
          <div className = 'content-list'>
            <ul>
              <li>
                <div className = 'content-list-img'><img src = '' alt = ''/></div>
                <div className = 'content-list-border'>
                  <div className = 'content-list-text'>
                    <h3></h3>
                    <p></p>
                  </div>
                  <div className = 'content-list-time'><span></span></div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
import React from 'react';
import '@/css/help.scss'

class Com extends React.Component{
  render () {
    return (
      <div className = 'home-help'>
        <header className = 'help-header'>
          <div className = 'header-back'>
            <button>返回</button>
          </div>
          <div className = 'header-title'>
            <h3>求助问答</h3>
          </div>
        </header>
        <div className = 'help-content'>
          <div className = 'content-top'>
            <div className = 'top-ctrl'>
              <div className = 'img'>
                <img src = '' alt = '' />
              </div>
              <div className = 'text'>
                <h3>求助问答</h3>
                <p>
                  <span>成员</span><i className = 'member'></i><span>帖子</span><s className = 'post'></s>
                </p>
              </div>
              <div className = 'more'><span></span></div>
            </div>
            <div className = 'top-tab'>
              <ul>
                <li>全部</li>
                <li>精华</li>
                <li>犬瘟细小</li>
              </ul>
              <div className = 'tab-sort'>按回复事件排序</div>
            </div>
          </div>
          <div className = 'help-main'>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }  
}

export default Com;
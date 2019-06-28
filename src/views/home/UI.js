import React from 'react';
import { NavLink} from 'react-router-dom'
import "../../css/home.scss"
import Banner from '../../components/home/banner'

class App extends React.Component{

  componentDidMount () {
    this.props.getHomeBannerListData()
  }

  render () {
    console.log(this)
    return (
      <div className = "box">
        <header className = "header">
          <h3>宠</h3>
          <i className="iconfont icon-sousuo"></i>
        </header>
        <div className = "content">
          <Banner  bannerlist = {this.props.homeBannerList}/>
          <div className="nav">
            <div className="nav-box">
              <ul>
              <NavLink to = "/cart">
                <i></i>
                <p>附近</p>
              </NavLink>
              <NavLink to = "/cart">
                <i></i>
                <p>商城</p>
              </NavLink>
              <NavLink to = "/cart">
                <i></i>
                <p>宝宝热评</p>
              </NavLink>
              <NavLink to = "/cart">
                <i></i>
                <p>求助问答</p>
              </NavLink>
              </ul>
            </div>
          </div>
          <div className="claw">
            <img src="/assets/claw.png" alt=""/>
            <div className="claw-right">
              <h3>爪事件</h3>
              <p>萌宠逗趣欢乐多</p>
            </div>
          </div>
          <div className="buy">
            <ul>
              <li>
                <div className="buy-top">
                <h3>买狗狗</h3><p>放心交易、犬猫30天健康保障</p>
                </div>
                <div className="buy-bottom">
                  <img src="" alt="" />
                  <div className="buy-bottom-right">
                    <p>
                      <h4>黑色拉布拉多</h4>
                      拉布拉多寻回犬/黑色/MM
                    </p>
                    <b>2999元</b>
                  </div>
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
import React from 'react';
import './login.less';

interface Prop {

}
interface State {

}

class Login extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
  }
  render() {
    return (
      <div className="Login">
        <div className="login-box">
          <div className="input-item">
            <input type="text" placeholder="请输入用户名"/>
          </div>
          <div className="input-item">
            <input type="password" placeholder="请输入密码"/>
          </div>
          <div className="third-login">
            <div className="third-login-btn-wrap">
              <span className="third-login-text">其他登陆：</span>
              <span className="third-login-icon ">
                <i className="iconfont icon-github"></i>
              </span>
            </div>
          </div>
          <div className="login-button">
            <button className="submit btn">登陆</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
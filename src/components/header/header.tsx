import React from 'react';
import './header.css';
import userDefaultPng from '../../assets/images/default/user_default.png';
import Input from '../input/input';


function HeaderNav () {
  return (
    <ul className="header-nav">
      <li className="header-nav-item">
        <a href="/">主页</a>
      </li>
      <li className="header-nav-item">
        <a href="/">鱼塘</a>
      </li>
    </ul>
  )
}
interface Props {
  name?: string;
  enthusiasmLevel?: number;
}
interface State {
  currentEnthusiasm: number;
  isUserInput: boolean
}
class Header extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1,
      isUserInput: false
    }
  }
  render () {
    let isUserInput = this.state.isUserInput;
    const v = isUserInput ?  <Input /> : <HeaderNav />;
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            LOGO
          </div>
          <div className="header-center">
            {v}
          </div>
          <div className="header-tool">
            <button className="header-tool-btn">
              <i className="iconfont icon-sousuo"></i>
            </button>
            <button className="header-tool-btn">
              <i className="iconfont icon-icon-test"></i>
            </button>
            <button className="header-tool-btn">
              <div className="header-tool-my">
                <img src={userDefaultPng} alt=""/>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
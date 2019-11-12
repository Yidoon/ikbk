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
function FormBtn () {
  return (
    <div className="btn-wrap">
      <button className="header-tool-btn form-btn cancle">取消</button>
      <button className="header-tool-btn form-btn confirm">确定</button>
    </div>
  );
}
interface toolNavProps {
  userDefaultPng: any,
  onSearchClick: Function
}
function ToolNav ({userDefaultPng, onSearchClick}: toolNavProps) {
  return (
    <div className="btn-wrap">
      <button className="header-tool-btn" onClick={() => onSearchClick()}>
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
      isUserInput: true
    }
  }
  onSearchClick = () => {
    this.setState({
      isUserInput: true
    })
  };
  render () {
    let isUserInput = this.state.isUserInput;
    const v = isUserInput ? <Input /> : <HeaderNav />;
    const p = isUserInput ? <FormBtn /> : <ToolNav
                                            userDefaultPng={userDefaultPng}
                                            onSearchClick={this.onSearchClick.bind(this)}
                                          />
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
            {p}
          </div>
        </div>
      </div>
    );
  }
}

export default Header
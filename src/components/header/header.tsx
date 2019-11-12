import React from 'react';
import './header.less';
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
interface formBtnProps {
  confirmText: string;
  onCancleClick: Function;
  onConfirmClick: Function;
}
function FormBtn ({confirmText, onCancleClick, onConfirmClick}: formBtnProps) {
  return (
    <div className="btn-wrap">
      <button className="header-tool-btn form-btn cancle" onClick={() => { onCancleClick() }}>取消</button>
      <button className="header-tool-btn form-btn confirm" onClick={() => { onConfirmClick() }}>{confirmText || '确定'}</button>
    </div>
  );
}
interface toolNavProps {
  userDefaultPng: any;
  onSearchClick: Function;
  onAddClick: Function;
}
function ToolNav ({userDefaultPng, onSearchClick, onAddClick}: toolNavProps) {
  return (
    <div className="btn-wrap">
      <button className="header-tool-btn" onClick={() => onSearchClick()}>
        <i className="iconfont icon-sousuo"></i>
      </button>
      <button className="header-tool-btn" onClick={() => onAddClick()}>
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
  isUserInput: boolean,
  toolConfirmBtnText: string,
  toolBtnClickType: string,
  placeHolderText: string
}
class Header extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1,
      isUserInput: false,
      toolConfirmBtnText: '确定',
      placeHolderText: '保存 URL https://...',
      toolBtnClickType: 'add',
    }
  }
  onSearchClick = () => {
    this.setState({
      isUserInput: true,
      toolConfirmBtnText: '搜索',
      toolBtnClickType: 'search'
    })
  };
  onAddClick = () => {
    this.setState({
      isUserInput: true,
      toolConfirmBtnText: '保存',
      toolBtnClickType: 'add'
    })
  };
  onCancleClick = () => {
    this.setState({
      isUserInput: false
    })
  };
  onConfirmClick = () => {
    console.log(this.state.toolBtnClickType, 'type')
  };
  render () {
    let isUserInput = this.state.isUserInput;
    let toolConfirmBtnText = this.state.toolConfirmBtnText;
    let placeHolderText = this.state.toolBtnClickType === 'add' ? '保存 URL https://...' : '搜索'
    const v = isUserInput ? <Input placeHolderText={placeHolderText} /> : <HeaderNav/>;
    const p = isUserInput ?
      <FormBtn
        confirmText={toolConfirmBtnText}
        onCancleClick={this.onCancleClick}
        onConfirmClick={this.onConfirmClick}/> :
      <ToolNav
        userDefaultPng={userDefaultPng}
        onSearchClick={this.onSearchClick}
        onAddClick={this.onAddClick}
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
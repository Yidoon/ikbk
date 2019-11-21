import React from "react";
import './leftmenu.less';

interface Props {

}
interface menuListType {
  menu_name: string,
  icon: string,
  link_url: string,
  [propName: string]: any
}
interface State {
  menuList: menuListType[]
}

class LeftMenu extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
    this.state = {
      menuList: [
        {
          menu_name: '我的列表',
          icon: '',
          link_url: ''
        }
      ]
    }
  };
  render () {
    let menuLit = this.state.menuList;
    return (
      <div className="left-menu">
        <div className="menu-wrap">
        {menuLit.map((item) => {
          return(
          <a href="" className="menu-item">{item.menu_name}</a>
          )
        })}
        </div>
      </div>
    );
  }
}

export default LeftMenu;





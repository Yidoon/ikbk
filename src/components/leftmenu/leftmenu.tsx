import React from "react";
import './leftmenu.less';

interface menuListType {
  id: number,
  menu_name: string,
  icon: string,
  link_url: string,
  [propName: string]: any
}

interface Props {
  menu_list: menuListType,
  changeSelectedMenu: Function
}
interface State {
  menuList: menuListType[],
  selectdMenuId?: any,
}

class LeftMenu extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
    this.state = {
      menuList: [
        {
          id: 1,
          menu_name: '我的列表',
          icon: '',
          link_url: '',

        },
        {
          id: 2,
          menu_name: '我的收藏',
          icon: '',
          link_url: ''
        },
        {
          id: 3,
          menu_name: '前端文章',
          icon: '',
          link_url: ''
        },
        {
          id: 4,
          menu_name: 'GIT相关',
          icon: '',
          link_url: ''
        },
        {
          id: 5,
          menu_name: '其他',
          icon: '',
          link_url: ''
        }
      ]
    }
  };
  selectMenu = (item: any) => {
    this.setState({
      selectdMenuId: item.id,
    })

  };
  render () {
    let menuLit = this.props.menu_list
    return (
      <div className="left-menu">
        <div className="menu-wrap">
        {menuLit.map((item: any) => {
          return(
          <a href="#" onClick={() => this.props.changeSelectedMenu(item.id)} key={item.id} className={`menu-item ${item.id === this.state.selectdMenuId ? 'menu-select' : ''}`}  >{item.menu_name}</a>
          )
        })}
        </div>
      </div>
    );
  }
}

export default LeftMenu;





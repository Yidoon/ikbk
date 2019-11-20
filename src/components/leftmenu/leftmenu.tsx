import React from "react";
import './leftmenu.less';

interface Props {

}
interface State {

}

class LeftMenu extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
  };
  render () {
    return (
      <div className="left-menu">
        <div className="menu-wrap">
          <a href="" className="menu-item">我的列表</a>
          <a href="" className="menu-item">我的列表</a>
          <a href="" className="menu-item">我的列表</a>
        </div>
      </div>
    );
  }
}

export default LeftMenu;





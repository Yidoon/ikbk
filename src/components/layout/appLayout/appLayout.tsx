import React from 'react';
import './applayout.less';

interface Prop {

}

interface State {

}

class AppLayout extends  React.Component<Prop, State>{
  constructor(props: Prop) {
    super(props);
  }
  getLayoutItem(name: string) {
    const { children } = this.props;
    let c = Array.isArray(children) ? children : [children];
    let r = c.filter((ch:any) => {
      return ch.type.name === name
    })
    return r;
  }
  render() {
    const { children } = this.props;
    console.log(children, 'childred')
    return (
      <div className="AppLayout">
        <div className="ikbk-layout-header">
          {this.getLayoutItem('Header')}
        </div>
        <div className="ikbk-layout-main">
          <div className="ikbk-layout-sider">
            {this.getLayoutItem('Sider')}
          </div>
          <div className="ikbk-layout-content">
            {this.getLayoutItem('Content')}
          </div>
        </div>
      </div>
    )
  }
}
export default AppLayout;
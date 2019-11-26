import React from 'react';
import './mainlist.less';

interface Prop {
  selectedMenuItem: any
}
interface State {

}

class MainList extends React.Component<Prop, State> {
  constructor (props: Prop) {
    super(props);
  };
  render() {
    return (
      <div className={`main-list`}>
        <div className={`main-selected-title`}>
          {this.props.selectedMenuItem.menu_name}
        </div>
      </div>
    )
  }
}

export default MainList;
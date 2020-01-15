import React from 'react';

interface Prop {

}
interface State {

}

class Sider extends React.Component<Prop, State>{
  constructor(props: Prop) {
    super(props);
  }
  render() {
    return (
      <div className="Sider">
        Left
      </div>
    )
  }
}

export default Sider;
import React from 'react';

interface Prop {

}
interface State {

}

class Left extends React.Component<Prop, State>{
  constructor(props: Prop) {
    super(props);
  }
  render() {
    return (
      <div className="Left">
        Left
      </div>
    )
  }
}

export default Left;
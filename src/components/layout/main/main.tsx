import React from 'react';

interface Prop {

}
interface State {

}

class Main extends React.Component<Prop, State>{
  constructor(props: Prop) {
    super(props)
  }
  render() {
    return(
      <div>
        Main
      </div>
    )
  }
}

export default Main;
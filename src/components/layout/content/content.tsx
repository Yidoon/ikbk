import React from 'react';

interface Prop {

}
interface State {

}

class Content extends React.Component<Prop, State>{
  constructor(props: Prop) {
    super(props)
  }
  render() {
    return(
      <div>
        Content
      </div>
    )
  }
}

export default Content;
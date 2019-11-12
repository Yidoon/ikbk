import React from 'react';
import './input.less';

interface Props {
  placeHolderText: string;

}
interface State {
}
class Input extends React.Component<Props, State>{
  constructor (props: Props) {
    super(props);
  };
  render () {
    let placeHolderText = this.props.placeHolderText;
    return (
      <div className="input">
        <input type="text" placeholder={placeHolderText} autoFocus />
      </div>
    )
  }
}
export default Input;

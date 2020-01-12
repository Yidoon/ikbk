import React from 'react';

interface Prop {

}
interface State {

}
class Home extends React.Component<Prop, State>{
    constructor(props: Prop) {
        super(props);
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Home"></div>
        );
    };
}
export default Home;
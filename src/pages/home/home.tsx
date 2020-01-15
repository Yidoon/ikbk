import React from 'react';
import AppLayout from "@comps/layout/appLayout/appLayout";
import Header from "@comps/layout/header/header";
import Sider from "@comps/layout/sider/sider";
import Content from "@comps/layout/content/content";
interface Prop {

}
interface State {

}
class Home extends React.Component<Prop, State>{
    constructor(props: Prop) {
        super(props);
    };
    render() {
        return(
            <div className="Home">
                <AppLayout>
                  <Header></Header>
                  <Sider></Sider>
                  <Content></Content>
                </AppLayout>
            </div>
        );
    };
}
export default Home;
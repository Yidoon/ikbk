import React from "react";
import './header.less';
 interface Prop {
 }
 interface State {

 }

 class Header extends React.Component<Prop, State>{
   constructor(props: Prop) {
     super(props);
   }
   render() {
     return (
       <div className="Header">
         Header
       </div>
     )
   }
 }

 export default Header;


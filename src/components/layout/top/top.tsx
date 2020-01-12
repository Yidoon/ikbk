import React from "react";
 interface Prop {

 }
 interface State {

 }

 class Top extends React.Component<Prop, State>{
   constructor(props: Prop) {
     super(props);
   }
   render() {
     return (
       <div className="Top">
         Top
       </div>
     )
   }
 }

 export default Top;


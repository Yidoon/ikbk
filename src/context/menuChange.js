import React from 'react';
import  { MenuContext } from './menuContext';

function MenuChange () {
  return (
   <div>
    <MenuContext.Consumer>
    <button>点击</button>
    </MenuContext.Consumer> 
   </div>
  )
}
export default MenuChange;
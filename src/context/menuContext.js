import React from 'react';
export const selectedMenu = {
  id: 1,
  icon: '',
  menu_name: '我的列表'
};

export const MenuContext = React.createContext({
  selectedMenu,
  changeContext: () => {}
});
import React from 'react';
import Header from './components/header/header';
import LeftNav from './components/leftmenu/leftmenu';
import MainList from './components/mainlist/mainlist';
import Home from './pages/home/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';


interface Prop {

}
interface State {
  menu_list: any,
  selectedMeunId: number
}

class App extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      menu_list: [
        {
          id: 1,
          menu_name: '我的列表',
          icon: '',
          link_url: '',

        },
        {
          id: 2,
          menu_name: '我的收藏',
          icon: '',
          link_url: ''
        },
        {
          id: 3,
          menu_name: '前端文章',
          icon: '',
          link_url: ''
        },
        {
          id: 4,
          menu_name: 'GIT相关',
          icon: '',
          link_url: ''
        },
        {
          id: 5,
          menu_name: '其他',
          icon: '',
          link_url: ''
        }
      ],
      selectedMeunId: 1
    }
  };
  /**
   * @description: 点击左侧菜单触发的函数
   * @param {number} 点击的菜单的id 
   * @return: {object} 菜单项
   */
  changeSelectedMenu = (id: number) => {
    this.setState({
      selectedMeunId: id
    })
  };
  getMenuItem = () => {
    let selectMenuItem = {};
    this.state.menu_list.forEach((element: any) => {
      if (element.id === this.state.selectedMeunId) {
        selectMenuItem = element
      }
    });
    return selectMenuItem;
  }
  render () {
    let selectedMenuItem = this.getMenuItem();
    return (
        <Router>
          <div className="App">
            <Route exact path="/login">
              login
            </Route>
            <Route exact path="/">
              home
            </Route>
            <LeftNav
              menu_list={this.state.menu_list}
              changeSelectedMenu={this.changeSelectedMenu}>
            </LeftNav>
          </div>
        </Router>
      // <div className="App">
      //   <Header />
      //   <div className="main-content">
      //     <LeftNav
      //       menu_list={this.state.menu_list}
      //       changeSelectedMenu={this.changeSelectedMenu}
      //     />
      //     <MainList selectedMenuItem={selectedMenuItem}/>
      //   </div>
      // </div>
    )
  }
}

export default App;

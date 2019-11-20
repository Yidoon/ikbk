import React from 'react';
import './App.less';
import Header from './components/header/header';
import LeftNav from './components/leftmenu/leftmenu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <LeftNav />
      </div>
    </div>
  );
}
export default App;

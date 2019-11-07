import React from 'react';
import './App.css';
import Header from './components/header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;

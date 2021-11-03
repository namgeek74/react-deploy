import React from 'react';
import { logo } from './asset/resource';
import './App.css';
import Example from './components/Example';

function App() {
  const title = "Hello World";
  const name = "Nam";
  return (
    <div>
      <h1>Deploy ReactJS to Github pages</h1>
      <Example title={title} name={name} />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

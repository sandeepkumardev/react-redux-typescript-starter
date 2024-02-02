import React, { ReactElement } from 'react';
import './App.css';
import Profile from './features/Profile';
import Counter from './features/Counter';

const Heading: React.FC = () => {
  return <h1>Template</h1>;
};

function App(): ReactElement {
  return (
    <div className="App">
      <Heading />
      <Profile />
      <Counter />
    </div>
  );
}

export default App;

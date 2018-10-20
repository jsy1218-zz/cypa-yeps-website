import * as React from 'react';
import './App.css';
import YepsNavBar from './components/YepsNavBar';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <YepsNavBar />
      </div>
        <img src="https://jsy1218.github.io/src/img/mockup.png" width="70%" height="70%" alt="Mockup"/>
    </div>
  );
}

export default App;
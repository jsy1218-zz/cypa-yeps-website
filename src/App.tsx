import * as React from 'react';
import './App.css';
import YepsNavBar from './components/YepsNavBar';
import Title from './components/Title';

export const App: React.StatelessComponent<{}> = () => {
  return (

    <div className="App">
      <div className="App-intro">
        <div className="App-intro-title">
          <YepsNavBar />
          <Title />
        </div>
      </div>
      <div className="keynotes">
      </div>
        <img src="https://jsy1218.github.io/src/img/mockup.png" width="70%" height="70%" alt="Mockup"/>
    </div>
  );
}

export default App;
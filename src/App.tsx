import * as React from 'react';
import './App.css';
import { YepsNavBar } from './components/YepsNavBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <YepsNavBar />
         <img src="https://jsy1218.github.io/src/img/mockup.png" width="70%" height="70%" alt="Mockup"/>
      </div>
    );
  }
}

export default App;
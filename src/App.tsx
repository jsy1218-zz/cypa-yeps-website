import * as React from 'react';
import './App.css';
// const imgSource = require('https://github.com/jsy1218/cypa-yeps-website/blob/master/src/img/mockup.png');

class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <img src="https://github.com/jsy1218/cypa-yeps-website/raw/master/src/img/mockup.png" width="70%" height="70%" alt="Mockup"/>
      </div>
    );
  }
}

export default App;
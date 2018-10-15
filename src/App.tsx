import * as React from 'react';
import './App.css';
const imgSource = require('src/img/mockup.png');

class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <img src={String(imgSource)} alt="Mockup"/>
      </div>
    );
  }
}

export default App;
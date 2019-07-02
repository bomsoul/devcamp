import React from 'react';
import Navhead from './components/Navhead';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render(){
    return (
        <Navhead/>
    );
  }
}
export default App;

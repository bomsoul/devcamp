import React from 'react';
import Navhead from './components/Navhead';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render(){
    return (
        <div>
          <Navhead/>
          <Footer/>
        </div>
    );
  }
}
export default App;

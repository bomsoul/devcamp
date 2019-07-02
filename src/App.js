import React from 'react';
import Navhead from './components/Navhead';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render(){
    return (
        <div>
          <Navhead/>
          <Banner/>
          <Footer/>
        </div>
    );
  }
}
export default App;

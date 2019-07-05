import React from 'react';
import Navhead from './components/Navhead';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';
import ImageUpload from './components/create/imageupload';


class App extends React.Component {
  render(){
    return (
        <div>
          <Navhead/>
          {/* <div className="container">
            <ImageUpload/>
          </div> */}
          
          <Footer/>
        </div>
    );
  }
}
export default App;

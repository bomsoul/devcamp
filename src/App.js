import React from 'react';
import Navhead from './components/Navhead';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';
import CreatePost from './components/create/create.post.component';

class App extends React.Component {
  render(){
    return (
        <div>
          <Navhead/>
          <Banner/>
          <div className="container">
            <CreatePost/>
          </div>
          <Footer/>
        </div>
    );
  }
}
export default App;

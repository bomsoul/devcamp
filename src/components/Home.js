import React from 'react';
import Banner from './Banner';
import Toprank from './Toprank';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner/>
                <div>
                    <h2 className="home-color"><center>Top Vote</center></h2>
                    <Toprank/>
                </div>
            </div>
        )
    }
}
import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <center>
                <h3>Created by: oldman development</h3>
                <div class="d-flex justify-content-around">
                    <div className="p-2">
                        Test
                    </div>
                    <div className="p-2">
                        Test1
                    </div>
                    <div className="p-2">
                        Test2
                    </div>
                </div>
            </center>
            </div>
        );
    }
}
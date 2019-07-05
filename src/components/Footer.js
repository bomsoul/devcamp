import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <hr/>
                <center>
                <h3>Created by: oldman development</h3>
                <div class="d-flex justify-content-around">
                    <div className="p-2">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="p-2">
                    <i class="fab fa-facebook-f"></i>
                    </div>
                    <div className="p-2">
                    <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </center>
            </div>
        );
    }
}
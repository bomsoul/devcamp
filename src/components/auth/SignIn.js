import React, { Component } from 'react'
import { declareVariable } from '@babel/types';

 class SignIn extends Component {
     
     state = {
        email: '',
        password: ''
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id]: e.target.value
        })
     }
     handleSubmit = (e) =>{
        e.preventDefault();
         console.log(this.state);
     }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                
                    <h5 className="base">Sign In</h5>
                    <div className="input-field">     
                        <label>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>    
                    </div>
                    <div>
                            <label className="input-field">Password</label>
                            <input required type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                           <button>Submit</button>
                   </div>
                </form>
            </div>

        )
    }
}

export default SignIn

import React from 'react'
import firebase from 'firebase';
import ReactDOM from 'react-dom';
const db=firebase.firestore(); //addfile
const form = document.querySelector('#adduser');
   



export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    } 

     state = {
        email: '',
        password: '',
     }

     toggle = () =>{
         this.setState(prevState => ({
             modal: !prevState.modal
         }));
     }
     handleChange = (e) =>{
         this.setState({
             [e.target.id]: e.target.value
        })
     }
     handleSubmit = (e) =>{
        e.preventDefault();
         console.log(this.state);
         db.collection('user').add({
            email: this.state.email,
            password: this.state.password
        });
     }
    render() {
        return (
            <div>
                <h5 color="danger" onClick={this.toggle}>SignUp</h5>
                             <div className="container">
                    <form onSubmit={this.handleSubmit} className="" id="adduser">
                        <div className="form-group">     
                            <label className=" color"><b>Email:</b> </label>
                            <input type="email" id="email" onChange={this.handleChange} className="form-control" placeholder="Enter your e-mail"/>    
                        </div>
                        <div className="form-group">
                            <label className="form-group color" id="password"><b>Password:</b></label>
                            <input required type="password" id="password" onChange={this.handleChange} className="form-control" placeholder="Enter your password"/>
                        </div>
                        <div className="input-field">
                            <button className="btn btn-success" id="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}
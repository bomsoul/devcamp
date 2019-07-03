import React, { Component } from 'react'
import { declareVariable } from '@babel/types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

 class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    } 

     state = {
        email: '',
        password: ''
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
     }
    render() {
        return (
            <div>
                <h10 color="danger" onClick={this.toggle}>sign in</h10>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} className="color">Sign In</ModalHeader>
                <ModalBody>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="form-group">     
                            <label className=" color"><b>Email:</b> </label>
                            <input type="email" id="email" onChange={this.handleChange} className="form-control" placeholder="Enter your e-mail"/>    
                        </div>
                        <div>
                            <label className="form-group color"><b>Password:</b></label>
                            <input required type="password" id="password" onChange={this.handleChange} className="form-control" placeholder="Enter your password"/>
                        </div>
                        {/* <div className="input-field">
                            <button className="btn btn-success">Submit</button>
                    </div> */}
                    </form>
                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default SignIn

import React from 'react';
import { storage } from '../../firebase';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, Icon, message } from 'antd';
import firebase from 'firebase';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';



const db=firebase.firestore();

const { Dragger } = Upload;



export default class ImageUpload extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        const { Option } = Select;
        
        this.state = { 
            image:null,
            url: '',
            urllink: '',
            name: '',
            desc: '',
            progress:0,
            dropdownOpen: false,
            champagne: ''            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChampagne = this.handleChampagne.bind(this);
        

        

    }
    
    // uploadondb = ()=>{
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
        
    // }
    handleChange =(e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState( () =>({image}));
        }
    }

    handleNameChange = (e) =>{
        this.state.name = e.target.value;
    }
    
    handleDescrip = (e) =>{
        this.state.desc = e.target.value;
    }

    handleChampagne = (e) => {
        this.state.champagne = e.target.value;
    }
    handleUpload = () =>{
        const {image} = this.state;
        const uploadTask = storage.ref('images/'+image.name).put(image);
        uploadTask.on('state_changed',
        (snapshot) =>{

        },
        (error) => {
            console.log(error);
        },
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                console.log(url);
                this.state.urllink = url.toString();
                db.collection('picture').add({
                    urls: this.state.urllink,
                    name: this.state.name,
                    desc: this.state.desc,
                    champagne: this.state.champagne
                });
                alert('Upload Complete!!')
            })
        });
    }

    render(){
        return(
            
            <div className="container">
            <br></br>
                <div className="form-group">
                    <input type="file" onChange={this.handleChange} />
                </div>
                <div className="from-group">
                    <label align="left">Name the picture:</label>
                    <input type="text" className="form-control" onChange={this.handleNameChange} placeholder="Name the picture"/>
                    <br></br>
                    <label align="left">Type the feeling:</label>
                    <textarea onChange={this.handleDescrip} className="form-control" rows="5" placeholder="Description Here"></textarea>
                    <br></br>
                    <Select placeholder="Type" onClick={this.handleChampagne} >
                        <Option value="test1"  >China</Option>
                        <Option value="test2"> U.S.A</Option>
                    </Select>
                </div>
                <br></br>
                <div align="center">
                    <button onClick={this.handleUpload} className="btn btn-success" >Upload</button>
                </div>
            </div>
        )
    };
}
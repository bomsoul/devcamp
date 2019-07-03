import React from 'react';
import { storage } from '../../firebase';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, Icon, message } from 'antd';
import firebase from 'firebase';

const db=firebase.firestore();

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
}

export default class ImageUpload extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            image:null,
            url: '',
            urllink: '',
            progress:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    // uploadondb = ()=>{
        
    // }
    handleChange =(e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState( () =>({image}));
        }
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
                    urls: this.state.urllink 
                });
            })
        });
       console.log(typeof(this.state.urllink));
    }

    render(){
        return(
            <div className="container" align="center">
            <progress value={this.state.progress} max="100"/>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <br></br>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload} className="btn btn-success">Upload</button>
            </div>
        )
    };
}
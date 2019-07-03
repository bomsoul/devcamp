import React from 'react';
import { storage } from '../../firebase';
import firebase from 'firebase';
const db=firebase.firestore();

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
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload} className="btn btn-success">Upload</button>
            </div>
        )
    };
}
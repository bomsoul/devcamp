import React from 'react';
import { storage } from '../../firebase';
export default class ImageUpload extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            image:null,
            url: '',
            progress:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
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
            })
        });
    }

    render(){
        return(
            <div className="container" align="center">
            <progress value={this.state.progress} max="100"/>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        )
    };
}
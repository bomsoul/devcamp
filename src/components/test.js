import React from 'react';
import firebase from 'firebase';

const db=firebase.firestore();
export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            url: ''
        }
    }


    render(){
        db.collection('picture').get().then((snapshot)=>{
            snapshot.forEach(doc=>{
                this.state.url = doc.data().urls;
               console.log(this.state.url);
            })
        })
        return(
            <img src={this.props.url}/>
        )
    }
}
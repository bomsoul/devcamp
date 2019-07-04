import React from 'react';
import firebase from 'firebase';

const db=firebase.firestore();
const image = '';
export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            url: []
        }
    }

    componentDidMount(){

        db.collection('picture').get().then((snapshot)=>{
            snapshot.forEach(doc=>{
                // this.state.url = doc.data().urls;
                console.log(doc.data());
                
                this.setState({
                    url: [ ...this.state.url , doc.data() ]
                })
                
            })
        })

    }

    render(){
        console.log(this.state.url);
        
        return(
            <div className="Test">
                {this.state.url.map((u , index)=> <img key={index} src={u.urls} alt="hello my image" />)}
            </div>
        )
    }
}
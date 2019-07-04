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
            <div className="container">
                <div className="row">
                {this.state.url.map((u , index)=> 
                //<img key={index} src={u.urls} alt="hello my image" />
                <div className="card">
                    <img className="card-img-top"  key={index} src={u.urls} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{u.name}</h4>
                        <p className="card-text">{u.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                )}
                </div>
            </div>
        )
    }
}
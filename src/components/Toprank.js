import React from 'react';
import firebase from 'firebase';

const db=firebase.firestore();

export default class Toprank extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            url: []
        }
    }

    componentDidMount(){
        var count = 0;
        db.collection('picture').get().then((snapshot)=>{
            snapshot.forEach(doc=>{
                // this.state.url = doc.data().urls;
                console.log(doc.data());
                if(count <3){
                    this.setState({
                        url: [ ...this.state.url , doc.data() ]
                    })
                }
                count ++;
                
            })
        })

    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                {this.state.url.map((u , index)=> 
                //<img key={index} src={u.urls} alt="hello my image" />
                    <div className="card">
                        <img className="card-img-top"  key={index} src={u.urls} alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">{u.name}</h4>
                        </div>
                    </div>
                )}
                </div>
            </div>
        )
    }
}
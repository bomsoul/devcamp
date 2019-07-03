import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ImageUpload from '../create/imageupload';
export default class Posts extends Component {
    render() {
        return (
            <div className="container">
                <ImageUpload/>
            </div>
            
        )
    }
}
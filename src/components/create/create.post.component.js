import React from 'react';
export default class CreatePost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: '',
          description: ''
        };
    }

    OnhandleSubmit= (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    OnHandleDescription= (e) =>{
        this.setState(
            {description: e.target.value}
        )
    }

    OnhandleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
            file: file,
            imagePreviewUrl: reader.result
            }
        );}

        reader.readAsDataURL(file)
    }

    render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
        <div>
        <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this.OnhandleImageChange} />
            <textarea value={this.state.description} onChange={this.OnHandleDescription} className="form-control" rows="5"></textarea>
            <button type="submit" className="btn btn-success" onClick={this.OnhandleSubmit}>Upload Image</button>
        </form>
        <center>
        {$imagePreview}
        <p>{this.state.description}</p>
        </center>
        </div>
    )
    }
}
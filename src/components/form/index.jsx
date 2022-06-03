import React from "react";
import './index.css';
import Button from "../../ui/button";


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            cover: '',
            apple: '',
            spotify: '',
            highlighted: false,
        }
    }
    clearFields = () => {
        this.setState({
            title: '',
            description: '',
            cover: '',
            apple: '',
            spotify: '',
            highlighted: false,
        })
    }
    onSubmit = () => {
        const post = {
            title: this.state.title,
            description: this.state.description,
            cover: this.state.cover,
            links: {
                apple: this.state.apple,
                spotify: this.state.spotify},
            highlighted: this.state.highlighted,
        }
        this.props.handleSubmit(post)
        this.clearFields()
    }
    render() {
        return (
            <div className="formWrapper">
                <input type="text" className="formInput" id='formTitle' placeholder="Заголовок поста" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
                <textarea className="formInput" id="formText" placeholder="Текст поста" value={this.state.description} onChange={event => this.setState({description: event.target.value})}></textarea>
                <input type="text" className="formInput" id='formImg' placeholder="Ссылка на изображение" value={this.state.cover} onChange={event => this.setState({cover: event.target.value})}/>
                <input type="text" className="formInput" id="formSpotify" placeholder="Ссылка Spotify" value={this.state.spotify} onChange={event => this.setState({spotify: event.target.value})}/>
                <input type="text" className="formInput" id="formApple" placeholder="Ссылка Apple" value={this.state.apple} onChange={event => this.setState({apple: event.target.value})}/>
                <label className="checkboxCave" >
                    <input id='formCheckbox' type="checkbox" value={this.state.highlighted} onChange={event => this.setState({highlighted: event.target.checked})}/>
                    <span> подсветить</span>
                </label>
            <Button onClick={this.onSubmit} className="add-post" size="l" color="red">Add post</Button>
        </div>
        )  
    }
}

export default Form;
import React from "react";
import './index.css';


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
    handleSubmit = () => {
        console.log(this.state)
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
            <button className="add-post" onClick={this.handleSubmit}>Add post</button>
        </div>
        )  
    }
}

export default Form;
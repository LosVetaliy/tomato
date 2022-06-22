import React from "react";
import './index.css';
import Button from "../../ui/button";
import cx from "classnames";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          cover: '',
          apple: '',
          spotify: '',
          highlighted: false,
          errors: {
            title: false,
            description: false,
            cover: false,
            apple: false,
            spotify: false,
          }
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
    onSubmit = async () => {
        if (await this.checkFields() === false) {
            return
        }
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
    checkFields = async () => {
        return new Promise(resolve => {
          this.setState({
            errors: {
              title: !this.state.title,
              description: !this.state.description,
              cover: !this.state.cover,
              apple: !this.state.apple,
              spotify: !this.state.spotify
            }
          }, () => resolve(!Object.values(this.state.errors).some(error => Boolean(error))))
        })
      }
    handleChangeField = (event, fieldName) => {
        this.setState({[fieldName]: event.target.value, errors: {...this.state.errors, [fieldName]: false}})
    }
    render() {
        return (
            <div className="formWrapper">
                <input type="text" className={cx("formInput", this.state.errors.title && "error")} id='formTitle' placeholder="Заголовок поста" value={this.state.title} onChange={event => this.handleChangeField(event, 'title')}/>
                <textarea className={cx("formInput", this.state.errors.description && "error")} id="formText" placeholder="Текст поста" value={this.state.description} onChange={event => this.handleChangeField(event, 'description')}></textarea>
                <input type="text" className={cx("formInput", this.state.errors.cover && "error")} id='formImg' placeholder="Ссылка на изображение" value={this.state.cover} onChange={event => this.handleChangeField(event, 'cover')}/>
                <input type="text" className={cx("formInput", this.state.errors.spotify && "error")} id="formSpotify" placeholder="Ссылка Spotify" value={this.state.spotify} onChange={event => this.handleChangeField(event, 'spotify')}/>
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
import React from "react";
import './index.css';

const Form = () => {
    return (
        <div className="formWrapper">
            <input type="text" className="formInput" id='formTitle' placeholder="Заголовок поста"/>
            <textarea className="formInput" id="formText" placeholder="Текст поста"></textarea>
            <input type="text" className="formInput" id='formImg' placeholder="Ссылка на изображение"/>
            <input type="text" className="formInput" id="formSpotify" placeholder="Ссылка Spotify"/>
            <input type="text" className="formInput" id="formApple" placeholder="Ссылка Apple"/>
            <label className="checkboxCave">
                <input id='formCheckbox' type="checkbox"/>
                <span> подстветить</span>
            </label>
        <button className="add-post" onclick='addPost()'>Add post</button>
    </div>
    )
};

export default Form;
import React from "react";
import './index.css';
import Text from "../../ui/text";

const Post = (props) => {
    return (
        <div className='postWrapper'> 
            <img src={props.post.cover} alt='cover' className='img'></img>
            <button className="cross">X</button>
            <div className="textWrapper">
                <Text tagName="h3">{props.post.title}</Text>
                <Text bold size="m">{props.post.description}</Text>
                <a href={props.post.links.spotify}>Spotify</a>
                <a href={props.post.links.apple}>Apple Music</a>
            </div>
        </div>
    )
}

export default Post;
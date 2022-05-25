import React from "react";
import './index.css';
import Text from "../../ui/text";
import Button from "../../ui/button";

const Post = (props) => {
    return (
        <div className='postWrapper'> 
            <img src={props.post.cover} alt='cover' className='img'></img>
            <Button className="cross" size="s" >X</Button>
            <div className="textWrapper">
                <Text bold size="m">{props.post.title}</Text>
                <Text>{props.post.description}</Text>
                <a href={props.post.links.spotify}>Spotify</a>
                <a href={props.post.links.apple}>Apple Music</a>
            </div>
        </div>
    )
}

export default Post;
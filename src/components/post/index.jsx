import React from "react";
import './index.css';
import Text from "../../ui/text";
import Button from "../../ui/button";

class Post extends React.Component {
    render() {
        const {post} = this.props
        return (
            <div className='postWrapper'> 
            <img src={post.cover} alt='cover' className='img'></img>
            <Button onClick={this.handleItemDelete} className="cross" size="s" >X</Button>
            <div className="textWrapper">
                <Text bold size="m">{post.title}</Text>
                <Text>{post.description}</Text>
                <a href={post.links.spotify}>Spotify</a>
                <a href={post.links.apple}>Apple Music</a>
            </div>
        </div>
        )
    }
    handleItemDelete = () => {
        if (!window.confirm('u sure?')) {
            return;
          }
        fetch(`http://localhost:3000/posts/${this.props.post.id}`, {
            method: 'delete'
        })
        .then(this.props.refresh)
    }
}

export default Post;
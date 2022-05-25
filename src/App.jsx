import React from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post';
import Form from './components/form';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        posts: [], 
        isLoading: true,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => this.setState({
          posts: data,
          isLoading: false,
      }))
      .catch(error => console.error(error))
  } 
  render() {
    if (this.state.isLoading) {
      return (
        <h1>Loading</h1>
      )
    }
    return (
      <>
        <Header/>
        {this.state.posts.map(post => <Post post={post} numb={10} key={post.id} />)}
        <Form/>
      </>
    )
  }
}


export default App;

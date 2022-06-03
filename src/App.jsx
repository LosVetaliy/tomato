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
    this.fetchData()
  } 
  fetchData = () => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => this.setState({
          posts: data,
          isLoading: false,
      }))
      .catch(error => console.error(error))
  }
  handleSubmitForm = (post) => {
    fetch('http://localhost:3000/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(this.fetchData)
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
        {this.state.posts.map(post => <Post post={post} key={post.id} refresh={this.fetchData}/>)}
        <Form handleSubmit={this.handleSubmitForm}/>
      </>
    )
  }
}


export default App;

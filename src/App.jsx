import React from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post';
import Form from './components/form';
import Modal from './components/modal';
import Button from './ui/button';


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
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
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
        <Button className="modalAddPost" size="m" color='gray'
          onClick={e => {
            this.showModal(e);}
          }>
          {" "}Open aditor{" "}
        </Button>
        <Modal onClose={this.showModal} show={this.state.show}>Show window</Modal>
      </>
    )
  }
}


export default App;

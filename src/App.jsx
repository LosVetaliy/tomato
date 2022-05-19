import './App.css';
import Header from './components/header';
import Post from './components/post';
import initialData from './initialData';
import Form from './components/form';

function App() {
  return (
      <>
        <Header/>
        {initialData.map(post => <Post post={post} numb={10} key={post.id} />)}
        <Form/>
      </>
  )
}

export default App;

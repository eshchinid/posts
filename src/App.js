import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Бес', body: 'Кот'},
    {id: 2, title: 'Мася', body: 'Кошка'},
    {id: 3, title: 'Филя', body: 'Кот'},
    {id: 4, title: 'Мона', body: 'Кошка'},
    {id: 5, title: 'Берта', body: 'Собака'}
  ]);

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost)
    setPosts([...posts, newPost])
    setTitle('');
    setBody('');
  }



  return (
    <div className='App'>
      <form>
        <MyInput
            type='text'
            placeholder='Имя животинки'
            value={title}
            onChange={e=> setTitle(e.target.value)}
        />
        <MyInput
            type='text'
            placeholder='Описание'
            value={body}
            onChange={e=> setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Добавить</MyButton>
      </form>
      <PostList posts={posts} title='Наши животинки'/>
    </div>
  );
}

export default App;

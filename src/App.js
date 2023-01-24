import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Бес', body: 'Кот'},
        {id: 2, title: 'Мася', body: 'Кошка'},
        {id: 3, title: 'Филя', body: 'Кот'},
        {id: 4, title: 'Мона', body: 'Кошка'},
        {id: 5, title: 'Берта', body: 'Собака'}
    ]);

    // const [newPost, setNewPost] = useState({title:'', body:''})

    // без оптимизации
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    //
    // const addNewPost = (e) => {
    //   e.preventDefault();
    //   const newPost = {
    //     id: Date.now(),
    //     title,
    //     body
    //   }
    //   console.log(newPost)
    //   setPosts([...posts, newPost])
    //   setTitle('');
    //   setBody('');
    // }

    // const addNewPost = (e) => {
    //     e.preventDefault();
    //     setPosts([...posts, {...newPost, id: Date.now()}])
    //     setNewPost({title: '', body: ''})
    // }
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== posts.id))
    }


    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <PostList
                remove={removePost}
                posts={posts}
                title='Наши животинки'/>
            <br/>
        </div>
    );
}

export default App;

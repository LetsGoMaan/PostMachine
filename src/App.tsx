import React, {useState} from 'react';
import './App.css';
import Posts, {PostType} from "./Posts";
import AddForm from "./AddForm";

function App () {

const [posts, setPosts] = useState<Array<PostType>>([
    {id: "1", title: "OneTitle", body: "yo"},
    {id: "2", title: "TwoTitle", body: "yoyo"},
    {id: "3", title: "ThreeTitle", body: "yoyoyo"},
])


    const addPost = (title: string, body: string) => {
        const newPost =  {id: "i", title: title, body: body}
        setPosts([newPost,...posts])
    }


    return (
        <div>
            <AddForm addPost = {addPost}/>
            <Posts title={"Post Machine"} posts={posts}></Posts>
        </div>

    )
}
export default App;

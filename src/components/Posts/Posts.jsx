import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then(data => setPosts(data))
    }, [])
    
    return (
        <>
        <h1>Posts :: {posts.length}</h1>
        {
            posts.map((post) => <Post key={uuidv4()} post={post}></Post>)
        }
        </>
    );
};

export default Posts;
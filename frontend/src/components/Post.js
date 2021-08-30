import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const baseUrl = "http://localhost:8000";
const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');
    const [author, setAuthor] =useState('');

    useEffect(() => {
      axios.get('http://localhost:8000/posts/' + id)
      .then((response) => {
        setPost(response.data);
      })
    }, [id]
      
    );
    useEffect(() => {
      axios.get('http://localhost:8000/users/'+ post.user)
      .then((response) => {
        setAuthor(response.data);
      })
    }, [id, post.user]
      
    );
    console.log(post.title, post.main_image);
    return (
      <div class="card col-5 detailCard">
        <img src={baseUrl + post.main_image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.content}</p>
          <figcaption class="blockquote-footer card-text">
            {author.name}
          </figcaption>
        </div>
      </div>
    );
  };

  export default Post;
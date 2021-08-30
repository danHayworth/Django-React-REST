import React from 'react';
import {useParams} from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
  
    console.log(id);
    return (
      <div>
        <p>Lorem Ipsum</p>
        <p>Id: {id}</p>
      </div>
    );
  };

  export default Post;
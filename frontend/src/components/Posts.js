import  React, { useState, useEffect } from 'react'
import axios from 'axios';



const Posts =(props) =>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {  
        if(props.name){
            axios.get('http://localhost:8000/posts/')
            .then((response) => {
                let post = response.data;
                setPosts(post);
                console.log();
            })
            .catch((error) =>{
                console.error(error);
            }) 
        } else {
            console.log('nu este logat');
        }            
    },[props.name ]);
    return(
        <div className="posts">
            {posts.map((post) => 
            <>
                <div hidden>{post.id}</div>
                <div>{post.title}</div>
                <img src={post.image_1} alt="" width="300" height="300"/>
                <img src={post.image_2} alt="" width="300" height="300"/>
                <img src={post.image_3} alt="" width="300" height="300"/>
                <img src={post.image_4} alt="" width="300" height="300"/>
                <img src={post.image_5} alt="" width="300" height="300"/>
                <div>{post.content}</div>
                <div>{post.user}</div>
            </>    
                )}

        </div>
    )
}
export default Posts
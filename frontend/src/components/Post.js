import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const baseUrl = "http://localhost:8000";
const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');
    const [author, setAuthor] =useState('');
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

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
    let images = (
      <Carousel 
      responsive={responsive}
      swipeable={true}
      showDots={true}
      >
      <div className="imagesCard"><img src={baseUrl + post.main_image} class="card-img-top" alt="..." /></div>
      </Carousel>);
    if(post.image_2 !== null){
      images = (
        <Carousel 
        responsive={responsive}
        swipeable={true}
        showDots={true}
        >
      <div className=" imagesCard"><img src={baseUrl + post.main_image}  alt="..." /></div>
      <div className=" imagesCard"><img src={baseUrl + post.image_2}  alt="..." /></div>
      </Carousel>
      );
      if(post.image_3 !== null){
        images = (
          <Carousel 
          responsive={responsive}
          swipeable={true}
          showDots={true}
          >
          <div className="imagesCard"><img src={baseUrl + post.main_image} class="card-img-top" alt="..." /></div>
          <div className="imagesCard"><img src={baseUrl + post.image_2} class="card-img-top" alt="..." /></div>
          <div className="imagesCard"><img src={baseUrl + post.image_3} class="card-img-top" alt="..." /></div>
          </Carousel>
        );
        if(post.image_4 !== null){
          images = (
            <Carousel 
            responsive={responsive}
            swipeable={true}
            showDots={true}
            >
              <div className="imagesCard"><img src={baseUrl + post.main_image} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_2} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_3} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_4} class="card-img-top" alt="..." /></div>
            </Carousel>
          );
          if(post.image_5 !== null){
            images = (
              <Carousel 
              responsive={responsive}
              swipeable={true}
              showDots={true}
              >
              <div className="imagesCard"><img src={baseUrl + post.main_image} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_2} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_3} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_4} class="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_5} class="card-img-top" alt="..." /></div>
              </Carousel>
            )
          }
        }
      }
    } 
    return (
      <div class="card col-5 detailCard">
          {images}       
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
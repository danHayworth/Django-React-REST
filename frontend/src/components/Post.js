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
      <div className="imagesCard"><img src={baseUrl + post.main_image} className="card-img-top" alt="..." /></div>
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
          <div className="imagesCard"><img src={baseUrl + post.main_image} className="card-img-top" alt="..." /></div>
          <div className="imagesCard"><img src={baseUrl + post.image_2} className="card-img-top" alt="..." /></div>
          <div className="imagesCard"><img src={baseUrl + post.image_3} className="card-img-top" alt="..." /></div>
          </Carousel>
        );
        if(post.image_4 !== null){
          images = (
            <Carousel 
            responsive={responsive}
            swipeable={true}
            showDots={true}
            >
              <div className="imagesCard"><img src={baseUrl + post.main_image} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_2} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_3} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_4} className="card-img-top" alt="..." /></div>
            </Carousel>
          );
          if(post.image_5 !== null){
            images = (
              <Carousel 
              responsive={responsive}
              swipeable={true}
              showDots={true}
              >
              <div className="imagesCard"><img src={baseUrl + post.main_image} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_2} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_3} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_4} className="card-img-top" alt="..." /></div>
              <div className="imagesCard"><img src={baseUrl + post.image_5} className="card-img-top" alt="..." /></div>
              </Carousel>
            )
          }
        }
      }
    } 
    return (
      <div className="card col-5 detailCard">
          {images}       
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <figcaption className="blockquote-footer card-text">
            {author.name}
          </figcaption>
        </div>
      </div>
    );
  };

  export default Post;
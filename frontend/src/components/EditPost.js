import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[user, setUser] = useState('');
    const[main, setMain] = useState('');
    const[im2, setIm2] = useState('');
    const[im3, setIm3] = useState('');
    const[im4, setIm4] = useState('');
    const[im5, setIm5] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/posts/' + id)
        .then((response) =>{
            setPost(response.data);
            setUser(post.user);
        })
    }, [id])

    const handleSubmit = e => {
        e.preventDefault();
        let form_data = new FormData();
        if(title !== ""){
            form_data.append('title', title);
        }
        else{
            form_data.append('title', post.title);
        }        
        console.log(title)
        if(content !== ""){
            form_data.append('content', content);
        }
        else{
            form_data.append('content', post.content);
        }       
        console.log(content)
        form_data.append('user', post.user)
        if(main !== "") {
        form_data.append('main_image', main, main.name);}
        if(im2 !== ""){
            form_data.append('image_2', im2, im2.name);}
        if(im3 !== ""){
            form_data.append('image_3', im3, im3.name);}
        if(im4 !== ""){
            form_data.append('image_4', im4, im4.name);}
        if(im5 !== ""){
            form_data.append('image_5', im5, im5.name);}
        let url = "http://localhost:8000/posts/"+id;
        console.log(form_data);
        axios.put(url, form_data,{
            headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(
            document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className += ' is-valid'),
            setTimeout(() => {
                window.location.replace('/posts/');
            }, 3000)
        )
    }
    const infoError = async function(){
        document.querySelectorAll('.form-control').forEach(innerHtml => innerHtml.className = 'form-control');
    }
    const showMore = () => {
        document.getElementsByClassName("extra")[0].style.display = "block";
        document.getElementsByClassName("extraBtn")[0].style.display = "none";
    }
    let images = [post.main_image, post.image_2, post.image_3, post.image_4, post.image_5];

    
    return(
        <div className="">
                <div className="card text-white bg-dark col-8 detailCard">
                    <h5 className="card-header text-center">Add post</h5>
                    <div className="card-body bg-light">
                        <div className="container">
                            <div className="row">
                                <form className="col 12" onSubmit={handleSubmit}>
                                <div className="row">
                                    <label>Title</label>
                                    <div className="input-field col12">
                                        <input id="icon_name" type="text" className="validate form-control" onChange={e => setTitle(e.target.value)} autoComplete="off" defaultValue={post.title} />                                       
                                    </div>
                                </div>
                                <div className="row">
                                    <label>Content</label>
                                    <div className="input-field col12">
                                        <textarea id="textarea1" defaultValue={post.content} className="materialize-textarea validate form-control" onChange={e => setContent(e.target.value)} ></textarea>                                                                               
                                    </div>
                                </div>                                
                                    <div class="row row-cols-5">
                                        <div className="col"><img src={post.main_image} alt="" style={{width:"150px", height:"100px"}} /></div>
                                        <div className="col"><img src={post.image_2} alt="" style={{width:"150px", height:"100px"}} /></div>
                                        <div className="col"><img src={post.image_3} alt="" style={{width:"150px", height:"100px"}} /></div>
                                        <div className="col"><img src={post.image_4} alt="" style={{width:"150px", height:"100px"}} /></div>
                                        <div className="col"><img src={post.image_5} alt="" style={{width:"150px", height:"100px"}} /></div>
                                    </div>           
                                <div className="row">
                                <label>Main photo:</label>
                                    <div className="input-field col12">                                       
                                        <input type="file" accept=".png, .jpeg, .jpg" className=" form-control" id="inputGroupFile02" onChange={e => setMain(e.target.files[0])}/>                                       
                                    </div>
                                </div>
                                <button type="button"   className="waves-effect waves-teal btn-flat extraBtn" onClick={showMore}>Add extra photos:</button>
                                <div className="extra" style={{display: "none"}}>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" className="form-control" id="inputGroupFile02" onChange={e => setIm2(e.target.files[0])}/>                                      
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" className="form-control" id="inputGroupFile02" onChange={e => setIm3(e.target.files[0])}/>                                      
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" className="form-control" id="inputGroupFile02" onChange={e => setIm4(e.target.files[0])}/>                                     
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" className="form-control" id="inputGroupFile02" onChange={e => setIm5(e.target.files[0])}/>                                      
                                    </div>
                                </div>
                                </div>
                                <div className="valid-feedback">
                                    We are publishing your post !
                                    <div className="progress teal accent-3">
                                        <div className="indeterminate"></div>
                                    </div>
                                </div>
                                <div className="invalid-feedback">
                                    Something is wrong, check your input !
                                </div>                           
                                <button className="btn waves-effect waves-light forms-btn black" type="submit" name="action" onClick={infoError}>Post
                                        <i className="material-icons right">send</i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default EditPost;
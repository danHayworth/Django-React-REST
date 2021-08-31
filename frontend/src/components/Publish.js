import React, {useState} from 'react';
import axios from 'axios';

const Publish = () => {
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[user, setUser] = useState('');
    const[main, setMain] = useState('');
    const[im2, setIm2] = useState('');
    const[im3, setIm3] = useState('');
    const[im4, setIm4] = useState('');
    const[im5, setIm5] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('content', content);
        form_data.append('user', 1)
        form_data.append('main_image', main, main.name);
        form_data.append('image_2', im2, im2.name);
        form_data.append('image_3', im3, im3.name);
        form_data.append('image_4', im4, im4.name);
        form_data.append('image_5', im5, im5.name)
        let url = "http://localhost:8000/posts/";
        axios.post(url, form_data, {
            headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
    }
   
    return(
        <div className="">
                <div class="card text-white bg-dark col-6 detailCard">
                    <h5 class="card-header text-center">Add post</h5>
                    <div class="card-body bg-light">
                        <div className="container">
                            <div className="row">
                                <form className="col 12" onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="input-field col12">
                                        <input id="icon_name" type="text" className="validate form-control" onChange={e => setTitle(e.target.value)} autoComplete="off" />
                                        <label for="icon_name">Title</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col12">
                                        <textarea id="textarea1" class="materialize-textarea" onChange={e => setContent(e.target.value)}></textarea>
                                        <label for="textarea1">Content</label>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                <label>Main photo:</label>
                                    <div className="input-field col12">
                                        
                                        <input type="file" accept="image/png, image/jpeg" class="form-control" id="inputGroupFile02" onChange={e => setMain(e.target.files[0])}/>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" class="form-control" id="inputGroupFile02" onChange={e => setIm2(e.target.files[0])}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" class="form-control" id="inputGroupFile02" onChange={e => setIm3(e.target.files[0])}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" class="form-control" id="inputGroupFile02" onChange={e => setIm4(e.target.files[0])}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" accept="image/png, image/jpeg" class="form-control" id="inputGroupFile02" onChange={e => setIm5(e.target.files[0])}/>
                                       
                                    </div>
                                </div>
                                
                                                            
                                <button className="btn waves-effect waves-light forms-btn black" type="submit" name="action">Send
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
export default Publish;
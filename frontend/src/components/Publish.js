import React, {useState} from 'react';

const Publish = () => {
    const[title, setTitle] = useState('');
    const[content, setContent] =useState('');
    const[main, setMain] = useState('');
    const[im2, setIm2] = useState('');
    const[im3, setIm3] = useState('');
    const[im4, setIm4] = useState('');
    const[im5, setIm5] = useState('');

    return(
        <div className="">

                <div class="card text-white bg-dark col-6 detailCard">
                    <h5 class="card-header text-center">Add post</h5>
                    <div class="card-body bg-light">
                        <div className="container">
                            <div className="row">
                                <form className="col 12" >
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
                                        
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={e => setMain(e.target.value)}/>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={e => setIm2(e.target.value)}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={e => setIm3(e.target.value)}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={e => setIm4(e.target.value)}/>
                                       
                                    </div>
                                </div>
                                <div className="row">
                                <label>Extra photo:</label>
                                    <div className="input-field col12">
                                        <input type="file" class="form-control" id="inputGroupFile02" onChange={e => setIm5(e.target.value)}/>
                                       
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
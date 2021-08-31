import  React, { Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = "http://localhost:8000";
export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []          
        };
        
    }
   
    componentDidMount() {
        axios.get('http://localhost:8000/posts/')
        .then((response) => {          
            this.setState({
                posts: response.data
            });           
        })
    }

    render(){       
        return(
            <div className="row row-cols-1 row-cols-md-4 ">               
                {this.state.posts.map((post) => 
                <>
                <div className="col">
                    <div key={post.id} className="card" style={{width: '18rem'}} >
                        <img src={baseUrl + post.main_image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">{post.title}</h6>
                            <p className="card-text d-inline-block col-12 text-truncate ">{post.content}</p>
                            <Link to={"" + post.id} key={post.id}><button className="btn btn-primary" >Read</button></Link>
                        </div>
                    </div>
                </div>
                </>
                )}                                                           
            </div>
        )
    }   
}

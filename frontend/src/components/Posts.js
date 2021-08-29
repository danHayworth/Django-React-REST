import  React, { Component} from 'react'
import axios from 'axios';

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
            <div class="row row-cols-1 row-cols-md-4 ">               
                    {this.state.posts.map((post) => 
                    <>
                    <div class="col">
                        <div key={post.id} class="card" style={{width: '18rem'}}>
                            <img src={baseUrl + post.main_image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.content}</p>
                                <a href="/" class="btn btn-primary">Go home</a>
                            </div>
                        </div>
                    </div>
                    </>
                    )}                                                           
                </div>
        )
    }   
}

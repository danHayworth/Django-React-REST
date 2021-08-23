import React, { Component }from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="home">
                Hi {this.props.name}
            </div>
        )
    
    }
}
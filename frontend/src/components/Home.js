import React from 'react'

const Home =(props) => {

    return(
        <div className="home">
            {props.name ? 'Hi ' +props.name : "Hi, please login."}
        </div>
    )

}
export default Home;
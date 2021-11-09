import React from 'react'
import './Home.css'
function Home(props) {
    const navigateToAbout = () => {
        //Navigating Programatically
        console.log(props);
        props.history.push('./about')
    }
    return (
        <div>
            <h1>Home</h1>
            <p>To understand general relativity, first, let's start with gravity, the force of attraction that two objects exert on one another. Sir Isaac Newton quantified gravity in the same text in which he formulated his three laws of motion, the</p>
            <button onClick={navigateToAbout}>Navigate To About Page</button>
        </div>
    )
}

export default Home


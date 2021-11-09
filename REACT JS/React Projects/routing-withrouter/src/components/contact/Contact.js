import React from 'react'
import { withRouter } from 'react-router-dom';
function Contact(props) {
    console.log('Contact props', props);
    const navigateToHome = () => {
        console.log(props);
        props.history.push('/');
    }
    return (
        <div>
            Contact Page<br />
            <button onClick={navigateToHome}>
                Navigate To Home
            </button>
        </div>
    )
}

export default withRouter(Contact);


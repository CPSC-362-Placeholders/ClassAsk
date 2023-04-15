import React from 'react';
import {useNavigate} from "react-router-dom";

function Homepage() {
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    const navigate = useNavigate();

    const subscribe = () => {
        navigate('/subscribe');
        window.location.reload();
    }

    return (
        <>
            <div>
                <h1>
                    <label>Welcome to ClassAsk!</label> <br></br>
                    {name}
                </h1>
                <button onClick={() => subscribe()}>Subscribe to a course!</button>
            </div>
        </>
    );

}

export default Homepage;


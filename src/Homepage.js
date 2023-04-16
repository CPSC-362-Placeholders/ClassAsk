import $, { get } from "jquery";
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Homepage() {
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    let email = parsed_session.email;
    const navigate = useNavigate();

    const subscribe = () => {
        navigate('/subscribe');
        window.location.reload();
    }

    const signOut = () => {
        window.sessionStorage.clear();
        navigate('/'); // navigates to login page
        window.location.reload();
    }

    const [subscribedCourses, setSubscribedCourses] = useState();


    const getSubscribedCourses = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/homepage.php',
            type: 'GET',
            async: false,
            data: {email: email},
            success: function (data) {
                setSubscribedCourses(data);
                //document.getElementById("subcoursetext").innerHTML = subscribedCourses;
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    useEffect(() => {
        getSubscribedCourses();
    }, []);

    useEffect(() => {
        if (subscribedCourses != null) {
            const dropdown = document.getElementById("subscribedClassButtons");
            const array = JSON.parse(subscribedCourses); //checks the string and parses it into an object we can use
            const convertArray = Object.values(array); //object is being converted to an array each value
            convertArray.forEach(element => { // for each value named element in the array do work that creates a new element (option) which are then set to the element, which then adds a new line to the dropdown
                const option = document.createElement("button");
                option.innerHTML= element;
                option.value = element;
                option.text = element;
                dropdown.appendChild(option);
                var br = document.createElement("br"); // create a new line break element
                dropdown.appendChild(br); // append the line break element after the button
            });
        }
    }, [subscribedCourses])



    return (
        <>
            <div>
                <h1>
                    <label>Welcome to ClassAsk!</label> <br></br>
                    {name}
                </h1>
                <button onClick={() => subscribe()}>Subscribe to a course!</button>
                <br/>
                <h2>
                <p> My courses: </p>
                <div name = "subscribedClassButtons" id = "subscribedClassButtons">

                </div>
                </h2>
                <br/>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        </>
    );

}

export default Homepage;


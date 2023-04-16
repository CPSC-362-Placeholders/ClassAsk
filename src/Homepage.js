import $ from "jquery";
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
    const [courseIds, setCourseIds] = useState();

    const getSubscribedCourses = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/homepage.php',
            type: 'GET',
            async: false,
            data: {email: email},
            success: function (data) {
                setSubscribedCourses(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    const getCourseIds = (courses) => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getCourseIds.php',
            type: 'GET',
            async: false,
            data: {courses: courses},
            success: function (data) {
                setCourseIds(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    const openCourse = (id) => {
        const url = '/thread?id=' + id;
        navigate(url);
        window.location.reload();
    }

    useEffect(() => {
        getSubscribedCourses();
    }, []);

    useEffect(() => {
        if (subscribedCourses != null) {
            getCourseIds(subscribedCourses);
        }
    }, [subscribedCourses]);

    useEffect(() => {
        if (courseIds !== undefined) {
            let courseIdsArray = JSON.parse(courseIds);
            let subscribedCoursesArray = JSON.parse(subscribedCourses);
            let tempButtons = [];
            for (let i = 0; i < courseIdsArray.length; ++i) {
                tempButtons.push(<button
                    onClick={() => openCourse(courseIdsArray[i])}>{subscribedCoursesArray[i]}</button>);
                tempButtons.push(<br/>);
            }
            setButtons(tempButtons);
        }
    }, [courseIds]);


    const [buttons, setButtons] = useState([]);

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
                    <div>
                        {buttons}
                    </div>
                </h2>
                <br/>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        </>
    );

}

export default Homepage;


import $ from "jquery";
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Subscribe() {
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let email = parsed_session.email;

    const [subscribe, setSubscribe] = useState();
    const [courseList, setCourseList] = useState();

    const navigate = useNavigate();

    const goToCourseCreation = () => {
        navigate('/coursecreation');
    }

    const subscribeToClass = () => {
        console.log(email);
        if (subscribe === undefined || subscribe === "classPlaceHolder") {
            alert("invalid class selection");
            return;
        }
        $.ajax({
            url: 'http://localhost/classask/src/php/subscribe.php',
            type: 'POST', //modifies data
            async: false,
            data: {name: subscribe, email: email},
            success: function (data) {
                if (data === "subscribed successfully") {
                    alert("Subscribed to course successfully!");
                    navigate("/homepage");
                    window.location.reload();
                }

                if (data === "Already subscribed") {
                    alert("You're already subscribed to this course! Find it on your homepage.");
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    const fetchClassList = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/fetchClassList.php',
            type: 'GET',
            async: false,
            success: function (data) {
                setCourseList(data);  //console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    useEffect(() => {
        fetchClassList();
    }, []);

    // courselist dropdown population
    useEffect(() => {
        if (courseList != null) {
            const dropdown = document.getElementById("classDropdown");
            const array = JSON.parse(courseList); //checks the string and parses it into an object we can use
            const convertArray = Object.values(array); //object is being converted to an array each value
            convertArray.forEach(element => { // for each value named element in the array do work that creates a new element (option) which are then set to the element, which then adds a new line to the dropdown
                const option = document.createElement("option");
                option.value = element;
                option.text = element;
                dropdown.appendChild(option);
            });
        }
    }, [courseList])

    return (
        <div>
            <h1>
                Subscribe to a course
            </h1>
            <select name="classDropdown" id="classDropdown" onChange={(e) => setSubscribe(e.target.value)}>
                <option value="classPlaceHolder">choose a class</option>
            </select>
            <br/>
            <br/>
            <button type="submit" onClick={() => subscribeToClass()}>Subscribe</button>

            <br/>
            <br/>
            <button type="submit" onClick={() => goToCourseCreation()}>Create Course</button>
        </div>
    );

}

export default Subscribe;
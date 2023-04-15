import $ from "jquery";
import React, { useState, useEffect } from 'react';


function Homepage(){
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    let email = parsed_session.email;


    const [courseList, setCourseList] = useState();
    const [subscribe, setSubscribe] = useState();



    var fetchClassList = () => {
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
    }
    var subClass = () => {
        console.log(email);
        if(subscribe === undefined || subscribe === "classPlaceHolder"){
            alert("invalid class selection");
            return;
        }
        $.ajax({
            url: 'http://localhost/classask/src/php/subscribe.php',
            type: 'POST', //modifys data 
            async: false,
            data: {name:subscribe, email:email},
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
        
    }

    useEffect(()=>{
        fetchClassList();  
    },[]);

    //courselist dropdown population
    useEffect(()=>{ 
    if (courseList != null){
        const dropdown = document.getElementById("classDropdown");
        var array = JSON.parse(courseList); //checks the string and parses it into an object we can use
        var convertArray = Object.values(array); //object is being converted to an array each value
        convertArray.forEach(element => { // for each value named elemnt in the array do work that creates a new element (option) which are then set to the element, which then adds a new line to the dropdown
            const option = document.createElement("option");
            option.value = element;
            option.text = element;
            dropdown.appendChild(option);
        });
    }
    },[courseList])

    return (
        <>
        <div>
            <h1>
            <label>Welcome to ClassAsk!</label> <br></br>
                {name}
                <br></br>
                <select name="classDropdown" id="classDropdown" onChange={(e)=> setSubscribe(e.target.value)} >
                    <option value="classPlaceHolder">choose a class</option>
                </select>
                <br></br>
                <button type="submit" name="saveSelect" onClick={() => subClass()}>Subscribe</button>
                 
                
            </h1>
            
        </div>
        </>
        
    );

}
export default Homepage;


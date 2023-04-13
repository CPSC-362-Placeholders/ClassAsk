import $ from "jquery";
//import React, { useState, useEffect } from 'react';


function Homepage(){
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    
    var classlist = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/fetchClassList.php',
            type: 'GET',
            async: false,
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    var subclass = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/subscribe.php',
            type: 'POST', //modifys data 
            async: false,
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
        
    }

    return (
        <>
        <div>
            <h1>
                {name}<br></br>
                <label>Choose a class</label> <br></br>
                <select name="add a class" id="personal list">
                <option value="class1">classoption1</option></select>
                <br></br>
                <button onClick={() => classlist()}>classlist</button>
                <br></br>
                 <button onClick={() => subclass()}>Subscribe</button>
                 
                
            </h1>
            
        </div>
        </>
        
    );

}

export default Homepage;


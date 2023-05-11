// IMPORT CSS
import './index.css';
import './css/DefaultTheme.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Register from './Register.js';
import Login from './Login.js';
import Homepage from './Homepage.js';
import Subscribe from "./Subscribe";
import CourseThread from "./CourseThread";
import CourseCreation from "./CourseCreation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./CreatePost";
import Post from "./Post";



function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/homepage" element={<Homepage/>} />
                <Route path="/subscribe" element={<Subscribe/>} />
                <Route path="/thread" element={<CourseThread/>} />
                <Route path="/createpost" element={<CreatePost/>} />
                <Route path="/coursecreation" element={<CourseCreation/>} />
                <Route path="/:courseCode/post" element={<Post/>} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

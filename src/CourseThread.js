import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function CourseThread() {

    const [queryParams] = useSearchParams();
    const courseId = queryParams.get("id");
    const [courseName, setCourseName] = useState();
    const navigate = useNavigate();

    const getCourseData = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/fetchCourseThread.php',
            type: 'POST',
            async: false,
            data: {id: courseId},
            success: function (data) {
                console.log(data);
                setCourseName(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    const createNewPost = () => {
        navigate('/createpost?id=' + courseId);
        window.location.reload();
    }

    useEffect(() => {
        getCourseData();
    }, [])


//useeffect for displaying the posts on screen from the database list
    const [postTitle, setPostTitle] = useState();

    const getPostTitle = (titles) => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getTitle.php',
            type: 'GET',
            async: false,
            data: {titles:titles},
            success: function (data) {
                setPostTitle(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    useEffect(() => {
        getPostTitle();
    }, []);
//


    if(courseName !== undefined) {
        return (
            <div>
                <h1>
                    {courseName}
                </h1>
                <br></br>
                {postTitle}
                <br></br>
                <button onClick={() => createNewPost()}>Create New Post</button>
            </div>
        );
    }
    return (
        <div>
            Loading...
        </div>
    );
}
export default CourseThread;
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

    if(courseName !== undefined) {
        return (
            <div>
                <h1>
                    {courseName}
                </h1>
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
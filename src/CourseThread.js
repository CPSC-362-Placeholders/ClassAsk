import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
function CourseThread() {

    const [queryParams] = useSearchParams();
    const courseId = queryParams.get("id");
    const [courseName, setCourseName] = useState();

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

    useEffect(() => {
        getCourseData();
    }, [])

    if(courseName !== undefined) {
        return (
            <div>
                {courseName}
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
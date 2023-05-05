import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
function CourseThread() {

    const [queryParams] = useSearchParams();
    const courseId = queryParams.get("id");
    const [courseName, setCourseName] = useState();
    const [postTitle, setPostTitle] = useState();
    const [titleList, setTitleList] = useState();
    const [postIds, setPostIds] = useState();
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

    const getPostTitle = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getTitle.php',
            type: 'GET',
            async: false,
            data: {id:courseId},
            success: function (data) {
                setPostTitle(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    };

    const getPostId = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getPostIds.php',
            type: 'GET',
            async: false,
            data: {id:courseId},
            success: function (data) {
                setPostIds(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }

    const createNewPost = () => {
        navigate('/createpost?id=' + courseId);
        window.location.reload();
    }

    useEffect(() => {
        getCourseData();
    }, [])

    useEffect(() => {
        getPostTitle();
    }, [courseName]);

    useEffect(() => {
        getPostId();
    }, [postTitle]);

    useEffect(() => {
       if (postTitle !== undefined){
        let titles = JSON.parse(postTitle);
        titles = titles.reverse();
        let ids = JSON.parse(postIds);
        ids = ids.reverse();
        let tempText = [];
        for (let i = 0; i < titles.length; ++i) {
            // tempText.push(<p>{titles[i]}</p>);
            tempText.push(<Link reloadDocument to={"/" + courseId + "/post?id=" + ids[i]}>{titles[i]}</Link>)
            tempText.push(<br/>);
        }
        setTitleList(tempText);
       }
    },[postIds]);

    if(courseName !== undefined) {
        return (
            <div>
                <h1>
                {courseName}
                </h1>
                {titleList}
                <br></br><br></br>
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
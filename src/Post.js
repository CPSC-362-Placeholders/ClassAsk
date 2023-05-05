import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function Post() {


    const [queryParams] = useSearchParams();
    const postId = queryParams.get("id");
    const [postTitle, setPostTitle] = useState();
    const [postDescription, setPostDescription] = useState();


    const getPostTitle = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getPostTitle.php',
            type: 'GET',
            async: false,
            data: {id:postId},
            success: function (data) {
                setPostTitle(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    const getPostDescription = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getPostDescription.php',
            type: 'GET',
            async: false,
            data: {id:postId},
            success: function (data) {
                setPostDescription(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    useEffect(() => {
        getPostTitle();
        getPostDescription();
    }, [])


    return (
        <div>
            <h1>{postTitle}</h1>
            <br/>
            <p>{postDescription}</p>
            <br/>
            <textarea rows={4} cols={30}/>
            <br/>
            <button>Reply...</button>
        </div>
    )
}

export default Post;
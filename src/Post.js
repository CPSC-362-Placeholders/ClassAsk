import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function Post() {


    const [queryParams] = useSearchParams();
    const postId = queryParams.get("id");
    const [postTitle, setPostTitle] = useState();
    const [postDescription, setPostDescription] = useState();
    const [replyArea, setReplyArea] = useState();
    const [replies, setReplies] = useState();
    const [repliesComponent, setRepliesComponent] = useState();


    const getPostTitle = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getPostTitle.php',
            type: 'GET',
            async: false,
            data: {id: postId},
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
            data: {id: postId},
            success: function (data) {
                setPostDescription(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    const getReplies = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/getReplies.php',
            type: 'GET',
            async: false,
            data: {id: postId},
            success: function (data) {
                setReplies(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    const postReply = (replyToId, baseThreadId) => {
        $.ajax({
            url: 'http://localhost/classask/src/php/createNewReply.php',
            type: 'POST',
            async: false,
            data: {reply: replyArea, replyToId: replyToId, baseThreadId: baseThreadId},
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
        window.location.reload();
    };

    useEffect(() => {
        getPostTitle();
        getPostDescription();
        getReplies();
    }, []);

    useEffect(() => {
        if (replies !== undefined) {
            let parsedReplies = JSON.parse(replies);
            let html = [];
            for (let i = 0; i < parsedReplies.length; ++i) {
                html.push(
                    <div>
                        <p style={{marginLeft: 1 + 'em'}}>{parsedReplies[i]}</p>
                        <button style={{marginLeft: 1 + 'em'}}>Reply..</button>
                    </div>
                );
            }
            setRepliesComponent(html);
        }
    }, [replies]);


    return (
        <div>
            <h1>{postTitle}</h1>
            <br/>
            <p>{postDescription}</p>
            <br/>
            <textarea rows={4} cols={30} onChange={(e) => setReplyArea(e.target.value)}/>
            <br/>
            <button onClick={() => postReply(postId, postId)}>Reply...</button>
            <br/><br/>
            <div>
                {repliesComponent}
            </div>
        </div>
    )
}

export default Post;
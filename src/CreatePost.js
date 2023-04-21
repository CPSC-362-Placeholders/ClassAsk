import {useSearchParams} from "react-router-dom";
import $ from 'jquery';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function CreatePost() {

    const [queryParams] = useSearchParams();
    const courseId = queryParams.get("id");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const createNewPost = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/createNewPost.php',
            type: 'POST',
            async: false,
            data: {courseId: courseId, title: title, description: description},
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        });
        const url = '/thread?id=' + courseId;
        navigate(url);
        window.location.reload();
    };

    if(courseId === "") {
        return(
            <div>
                <h1>
                    You got here and you shouldn't be here!
                </h1>
            </div>
        )
    }
    return(
      <div>
         <h1>
             Create a new post!
         </h1>
         <form>
             <label>Post Title</label> <br/>
             <input type={"text"} id={"postTitle"} onChange={(e) => setTitle(e.target.value)}/> <br/><br/>

             <label>Description</label> <br/>
             <textarea rows="4" cols="50" id={"description"} onChange={(e) => setDescription(e.target.value)}/> <br/><br/>

             <button type={"submit"} onClick={() => createNewPost()}>Submit</button>
         </form>
      </div>
    );

}
export default CreatePost;
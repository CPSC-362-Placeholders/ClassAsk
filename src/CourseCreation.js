import $ from 'jquery';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function CourseCreation(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
        <div>
            <h1>
                Create a Course
            </h1> 
            <form>

            </form>

        </div>
    )
}


export default CourseCreation;

// export
// import in index
// replace tag inside root.render
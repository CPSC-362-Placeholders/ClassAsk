import $, { event } from 'jquery';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function CourseCreation(){
    const [className, setClassName] = useState("");
    const [classCode, setClassCode] = useState(""); // class code will need to be divided into prefix and code/number 

    const navigate = useNavigate();

    const handleSubmit = () => {
        const classCodePattern = /^[A-Z]{3,4} \d{3}[A-Z]?$/;
        const emptyPattern = /^\s*$/;

        if(emptyPattern.test(className)){
            alert("Class name cannot be empty.");
            return;
        }

        if(classCodePattern.test(classCode) == false){
            alert("Please follow the class code guidelines: The class prefix must be at least 3 capital letters followed by 3 numbers and an optional letter.");
            return;
        }

        if(window.confirm("Are you sure you want to create this course?")){
            create(className, classCode);
            navigate('/subscribe');
        } else {
            
        }

    }

    return (
        <div>
            <h1>
                Create a Class
            </h1> 
            <form>
                <label>Course Name:</label>
                <input type="text" id="className" onChange={(e) => setClassName(e.target.value)} maxLength="60"/> <br/><br/>

                <label>Course Code:</label>
                <input type="text" id="classCode" onChange={(e) => setClassCode(e.target.value)} /> <br/><br/>

            </form>
            <button onClick={() => handleSubmit()}> Submit </button>

        </div>
    )
}



function create(className, classCode) {
    $.ajax({
        url: 'http://localhost/classask/src/php/courseCreation.php',
        type: 'POST',
        data: {className: className, classCode: classCode},
        success: function (data) {
            if (data === "Already created") {
                alert("A section already exists for that class! Find it in the subscribe drop down list.");
            } else{
                alert("Successfully created class. Find it in the subscribe drop down list.");
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}


export default CourseCreation;

// export
// import in index
// replace tag inside root.render
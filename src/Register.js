import $ from 'jquery';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Register(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        register(firstName, lastName, email, password);
        navigate('/');
    }

    return (
        <div>
            <h1>
                Create a ClassAsk Account
            </h1> 
            <form>
                <label>First Name:</label>
                <input type="text" id="fname" onChange={(e) => setFirstName(e.target.value)}required /> <br/><br/>

                <label>Last Name:</label>
                <input type="text" id="lname" onChange={(e) => setLastName(e.target.value)}required /> <br/><br/>
        
                <label>CSUF Email:</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/> <br/><br/>

                <label>Set Password:</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}  required minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/> <br/>
                <p>  (Password should have at least 1 digit, 1 lowercase letter, 1 uppercase letter, and have a minumum of 8 characters) </p>
            </form>
            <button onClick={() => handleSubmit()}> Submit </button>
        </div>
    )
}
function register(firstName, lastName, email, password) {
    $.ajax({
        url: 'http://localhost/classask/src/php/register.php',
        type: 'POST',
        data: {firstName: firstName, lastName: lastName, email: email, password: password},
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("error");
        }
    });
}

export default Register;

// export
// import in index
// replace tag inside root.render
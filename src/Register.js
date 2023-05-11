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
                Class
                <a>ASK</a>
            </h1> 
            <form id = "Registration">
                <ul id = "RegistrationContainer">
                    <li id= "RegistrationHeader">
                        <h2>
                            Class<a>ASK</a> Account Registration
                        </h2>
                    </li>
                    <li className="FirstNameInput">
                        <input  className="FirstName"  placeholder="First Name"  type="text"  onChange={(e) => setFirstName(e.target.value)}  required />
                    </li>
                    
                    <li className="LastNameInput">
                        <input  className="LastName"  type="text"  placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)}  required />
                    </li>

                    <li className="EmailInput">
                        <input  className="Email"  type="email"  placeholder="CalState Fullerton Email"  onChange={(e) => setEmail(e.target.value)}  required/>
                    </li>

                    <li className="PasswordInput">
                        <input className="Password"  type="password"  placeholder="Password"  onChange={(e) => setPassword(e.target.value)}  required minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                    </li>
                    <li className="RegistrationSubmission">
                        <button onClick={() => handleSubmit()}> Submit </button>
                    </li>
                </ul>
            </form>

            
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
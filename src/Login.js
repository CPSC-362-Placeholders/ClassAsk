import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import $ from "jquery";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = () => {
        if (login(email, password) === 0){
            navigate('/homepage');
            window.location.reload();
        } else {
            alert ("email/pw does not exist")
        }        
    }

    return (
        <>
                <h1>
                    Class
                    <a>ASK</a>
                </h1>

                <form id="Login">

                    <ul id = "LoginContainer">

                        <li className="LoginHeader">
                            <h2>
                                Class<a>ASK</a> LogIn
                            </h2>
                        </li>
                        <li className="EmailInput">     
                            <input  className="Email"  type="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="CSUF Email"/>
                        </li>

                        <li id = "PasswordInput">
                            <input className="Password" type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/>
                        </li>
                    
                        <li id = "ToggleAutoLogIn">
                            <input className="AutoLogInToggle" type="checkbox"/> Remember Me
                        </li>


                        <li id = "PasswordRecovery">
                            <a href="#">Forgot your password?</a>
                        </li>

                        <li id ="AccountRegistration">
                            <Link to={"/register"}>Register for a ClassASK Account.</Link>
                        </li>

                        <li className="SignIn">
                            <button onClick={() => handleSignIn()}>Sign In</button>
                        </li>
                    </ul>
                </form>

            <Outlet/>
        </>
    )
}

function login(email, password) {
    var result;
    $.ajax({
        url: 'http://localhost/classask/src/php/login.php',
        type: 'GET',
        async: false, 
        data: {email: email, password: password},
        withCredentials: true,
        success: function (data) {
            if(data === "Doesn't exist") {
                console.log("data doesn't exist in db");
                result = 1;
            } else {
                console.log("data found in db");
                console.log(data);
                window.sessionStorage.setItem("session", data);
                result = 0;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return result;
}



export default Login;

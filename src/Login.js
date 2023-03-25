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
        } else {
            alert ("email/pw does not exist")
        }        
    }

    return (
        <>
            <div>
                <h1>
                    Login to your ClassAsk Account!
                </h1>
                <form>
                    <input type="email" id={"email"} onChange={(e) => setEmail(e.target.value)} placeholder="CSUF Email"/><br></br>
                    <input type="password" id={"password"} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br></br>
                    <br></br>
                    <input type="checkbox"/> Remember Me<br></br>
                    <a href="#">Forgot your password?</a><br></br>
                    <li>
                        <Link to={"/register"}>Register for an Account</Link>
                    </li>
                </form>
                <button onClick={() => handleSignIn()}>Sign In</button>

            </div>
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

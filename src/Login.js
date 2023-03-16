import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import $ from "jquery";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div>
                <h1>
                    Login to your ClassAsk Account!
                </h1>
                <form>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="CSUF Email"/><br></br>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br></br>
                    <br></br>
                    <input type="checkbox"/> Remember Me<br></br>
                    <a href="#">Forgot your password?</a><br></br>
                    <li>
                        <Link to={"/register"}>Register for an Account</Link>
                    </li>
                </form>
                <button onClick={() => login(email, password)}>Sign In</button>

            </div>
            <Outlet/>
        </>
    )
}

function login(email, password) {
    $.ajax({
        url: 'http://localhost/classask/src/php/login.php',
        type: 'GET',
        data: {email: email, password: password},
        success: function (data) {
            if(data === "Doesn't exist") {
                console.log("data doesn't exist in db");
            } else {
                console.log("data found in db");
            }
        },
        error: function () {
            console.log("error");
        }
    });
}

export default Login;

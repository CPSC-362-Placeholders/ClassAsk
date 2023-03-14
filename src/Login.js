import {Link, Outlet} from "react-router-dom";

function Login()
{
  return (
      <>
          <div>
              <h1>
                  Login to your ClassAsk Account!
              </h1>
              <form>
                  <input type="email" placeholder="CSUF Email" /><br></br>
                  <input type="password" placeholder="Password" /><br></br>
                  <button>Sign In</button><br></br>
                  <input type="checkbox"/> Remember Me<br></br>
                  <a href="#">Forgot your password?</a><br></br>
                  <li>
                      <Link to={"/register"}>Register for an Account</Link>
                  </li>
              </form>
          </div>
          <Outlet/>
      </>
  )
}

export default Login;

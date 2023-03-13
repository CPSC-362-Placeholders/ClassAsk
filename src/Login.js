function Login()
{
  return (
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
                <a href="#">Register For an Account</a>
          </form>
      </div>
  )
}

export default Login;

function Login()
{
  return (
      <div>
          <h1>
              Login to your ClassAsk Account!
          </h1> 
          <form>
          <input type="email" placeholder="CSUF Email" />
		    	<input type="password" placeholder="Password" />
			    <a href="#">Forgot your password?</a>
			    <button>Sign In</button>
          </form>
      </div>
  )
}

export default Login;

function Register(){
    return (
        <div>
            <h1>
                Create a ClassAsk Account
            </h1> 
            <form>
                <label for="fname" >First Name:</label>
                <input type="text" id="fname" firstName="fname" required /> <br/><br/>

                <label for="lname">Last Name:</label>
                <input type="text" id="lname" lastName="lname" required /> <br/><br/>
        
                <label for="email">CSUF Email:</label>
                <input type="email" id="email" email="email" required/> <br/><br/>

                <label for="password">Set Password:</label>
                <input type="password" id="password" password="password" required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/> <br/>
                <p>  (Password should have at least 1 digit, 1 lowercase letter, 1 uppercase letter, and have a minumum of 8 characters) </p>

                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Register;

// export
// import in index
// replace tag inside root.render
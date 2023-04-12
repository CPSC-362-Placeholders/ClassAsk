import $ from "jquery";

function Homepage(){
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    
    var classlist = () => {
        $.ajax({
            url: 'http://localhost/classask/src/php/fetchClassList.php',
            type: 'GET',
            async: false,
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }


    return (
        <>
        <div>
            <h1>
                {name}<br></br>
                <label>Choose a class</label> <br></br>
                <select name="add a class" id="personal list">
                <option value="class1">classoption1</option></select>
                <input type="submit" value="submit" name="submit"></input>
                <button onClick={() => classlist()}>test</button>
                
            </h1>
            
        </div>
        </>
        
    );

}

export default Homepage;


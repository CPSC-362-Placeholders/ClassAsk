function Homepage(){
    let session = window.sessionStorage.getItem("session");
    let parsed_session = JSON.parse(session);
    let name = parsed_session.first_name + " " + parsed_session.last_name;
    return (
        <div>
            <h1>
                {name}
            </h1>
        </div>
    );
}

export default Homepage;
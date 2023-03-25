import {useEffect} from "react";
import $ from "jquery";

function Homepage(){

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        $.ajax({
            url: 'http://localhost/classask/src/php/homepage.php',
            type: 'GET',
            success: function (data) {
                console.log(data);
            },
            error: function () {
                return {};
            }
        })
    }

    return (
        <div>
            <h1>
                test
            </h1>
        </div>
    )


}

export default Homepage;
import React from "react";
import ToggleDownButton from "../components/Buttons_and_others/ToggleDownButton.jsx";

function toggle_down_button(){
    const button_down = document.getElementById("button_down");
    button_down.classList.toggle("show");
}

window.onclick = function(event) {

    if(!event.target.matches(".account_button")){
        const toggle_down = document.getElementsByClassName("drop_content");
        for(let i = 0; i < toggle_down.length; i++){
            let open_drop = toggle_down[i];
            if(open_drop.classList.contains("show")){
                open_drop.classList.remove("show");
            }
        }
    }
    return (
        <div>
            <ToggleDownButton/>
        </div>
    );
}

export default toggle_down_button;


import React from 'react';
import { useState } from "react";

function Dropdown(){

    const [open,setOpen] = useState<Boolean>(false);
    const handleDropDownFocus = (state: boolean) => {
        setOpen(!state);
    }
    console.log(open);
    return(
        <div className="App">
            <div className="app-drop-down-container">
                <button onClick={(e) => handleDropDownFocus(!open)}>Drop Down</button>
                {open &&(
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                )}

            </div>
        </div>
    );
}

export default Dropdown;
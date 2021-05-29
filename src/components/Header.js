import React from 'react'
import { MdToll } from "react-icons/md";
import { MdFiberSmartRecord } from "react-icons/md";

export default function Header({ handleToggleDarkMode, darkMode }) {
    return (
        <div className="header">
            <h1>Note Paper</h1>
            <button
            onClick={()=>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            } 
            className="save" 
            style={{background:'#33425A'}}>
                Light / Dark
                {darkMode ? 
                <MdToll className="mode-icon"/>
                 :<MdFiberSmartRecord className="mode-icon" />} 
            </button>
            
        </div>
    )
}

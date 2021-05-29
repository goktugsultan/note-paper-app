import React from 'react'
import { MdDeleteSweep } from "react-icons/md";


export default function Note() {
    return (
        <div className="note">
            <span>Hello I'm first note</span>
            <div className="note-footer">
                <small>29 May 2021</small>
                <MdDeleteSweep />
                
            </div>
            
        </div>
    )
}

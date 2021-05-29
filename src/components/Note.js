import React from 'react'
import { MdDeleteSweep } from "react-icons/md";


export default function Note({ id, text, date}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteSweep  className="delete-icon"/>
            </div>
        </div>
    )
}

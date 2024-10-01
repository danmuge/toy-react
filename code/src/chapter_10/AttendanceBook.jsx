import React from "react";

const students = [
    {
        id:1,
        name : "Inje",
    },
    {
        id:2,
        name : "Steve",
    },
    {
        id:3,
        name : "Jeff",
    },
    {
        id:4,
        name : "Bijj",
    },

];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;
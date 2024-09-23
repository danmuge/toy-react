import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="파이썬" page={300} />
            <Book name="리엑트" page={50} />
            <Book name="C" page={100} />
        </div>
    );
}

export default Library;
import React from "react";
import Comment from "./Comment";

const comments = [
    {name : "석용근", comment : "안녕하세요, 소플입니다."},
    {name : "김민재", comment : "리액트 연습"},
    {name : "홍범석", comment : "get out"}
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}
export default CommentList;
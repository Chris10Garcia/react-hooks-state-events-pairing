import React from "react"
import Comment from "./Comment"

function Comments ({comments}){
    console.log(comments.length)


    const commentsJSX = comments.map(obj => {
        return (
            <Comment key = {obj.key} user = {obj.user} comment = {obj.comment} />
        )
    })

    return(
        <h3>{comments.length} Comments
            {commentsJSX}      
        </h3>
    )
}


export default Comments
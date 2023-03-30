import React from "react"
import Comment from "./Comment"

function Comments ({comments}){

    const commentsJSX = comments.map(obj => {
        return (
            <Comment key = {obj.id} user = {obj.user} comment = {obj.comment} />
        )
    })

    return(
        <h3>{comments.length} Comments
            {commentsJSX}      
        </h3>
    )
}


export default Comments
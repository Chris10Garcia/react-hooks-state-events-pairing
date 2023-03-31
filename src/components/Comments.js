import React from "react"
import Button from "./Button"
import Comment from "./Comment"

function Comments ({comments, voteData, handleVotes}){

    const commentsJSX = comments.map(obj => {
        return (
            <Comment key = {obj.id} user = {obj.user} comment = {obj.comment}>
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👍"} name= {"commentUp"} />
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👎"} name= {"commentDown"}/>
            </Comment>
            
        )
    })

    return(
        <h3>{comments.length} Comments
            {commentsJSX}      
        </h3>
    )
}


export default Comments
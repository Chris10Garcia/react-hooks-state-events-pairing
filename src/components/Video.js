import React from "react"
import Button from "./Button"
import Comments from "./Comments"
import TitleSubtitle from "./TitleSubtitle"
import VideoFrame from "./VideoFrame"


function Video({data}){
    const {embedUrl, title, views, createdAt, upvotes, downvotes, comments} = data

    function handleShowComments(event){
        console.log(event.target.name)
    }



    return(
        <div>
            <VideoFrame embedUrl={embedUrl} title = {title} />
            <TitleSubtitle title = {title} views = {views} createdAt = {createdAt}>
                <Button upvotes={upvotes} downvotes = {downvotes} thumbEmjoi = {"👍"} />
                <Button upvotes={upvotes} downvotes = {downvotes} thumbEmjoi = {"👎"} />
            </TitleSubtitle>
            <br></br>
            <button onClick = {handleShowComments} name={"show"}>Hide Comments</button>
            <Comments comments={comments}/>
        </div>
    )
}


export default Video
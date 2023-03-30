import React, { useState } from "react"
import Button from "./Button"
import Comments from "./Comments"
import ShowHide from "./ShowHide"
import TitleSubtitle from "./TitleSubtitle"
import VideoFrame from "./VideoFrame"


function Video({data}){
    const {embedUrl, title, views, createdAt, upvotes, downvotes, comments} = data

    function handleShowComment(){
        setShowComments(!showComments)
    }
    const [voteData, setVoteData] = useState({
        upvotes: upvotes,
        downvotes: downvotes
    })

    const [showComments, setShowComments] = useState(true)

    function handleVotes(event){
        // eslint-disable-next-line default-case
        switch (event.target.name){
            case "up":
                voteData.upvotes += 1;
                break;
            case "down":
                voteData.downvotes +=1;
                break;
        }
        setVoteData({...voteData})
    }


    return(
        <div>
            <VideoFrame embedUrl={embedUrl} title = {title} />
            <TitleSubtitle title = {title} views = {views} createdAt = {createdAt}>
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👍"} />
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👎"} />
            </TitleSubtitle>
            <ShowHide handleShowComment={handleShowComment} showComments={showComments}/>
            {showComments ? <Comments comments={comments}/> : ""}
        </div>
    )
}


export default Video
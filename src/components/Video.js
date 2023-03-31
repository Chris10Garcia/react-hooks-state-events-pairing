import React, { useState } from "react"
import Button from "./Button"
import Comments from "./Comments"
import ShowHide from "./ShowHide"
import TitleSubtitle from "./TitleSubtitle"
import VideoFrame from "./VideoFrame"


function Video({data}){
    const {embedUrl, title, views, createdAt, upvotes, downvotes, comments} = data


    const [voteData, setVoteData] = useState({
        videoUp: upvotes,
        videoDown: downvotes,
        commentUp: 0,
        commentDown: 0,
        1: {testUp: 10, testdown: 50}
    })

    const [showComments, setShowComments] = useState(true)

    function handleVotes(event){
        // eslint-disable-next-line default-case
        switch (event.target.name){
            case "videoUp":
                voteData.videoUp += 1;
                break;
            case "videoDown":
                voteData.videoDown +=1;
                break;
            case "commentUp":
                voteData.commentUp +=1;
                break;
            case "commentDown":
                voteData.commentDown +=1;
                break;
        }
        setVoteData({...voteData})
    }

    console.log(voteData)
    function handleShowComment(){
        setShowComments(!showComments)
    }



    return(
        <div>
            <VideoFrame embedUrl={embedUrl} title = {title} />
            <TitleSubtitle title = {title} views = {views} createdAt = {createdAt}>
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👍"} name="videoUp" />
                <Button voteData = {voteData} handleVotes = {handleVotes} thumbEmjoi = {"👎"} name="videoDown"/>
            </TitleSubtitle>
            <ShowHide handleShowComment={handleShowComment} showComments={showComments}/>
            {showComments ? <Comments comments={comments} voteData = {voteData} handleVotes = {handleVotes}/> : ""}
        </div>
    )
}


export default Video
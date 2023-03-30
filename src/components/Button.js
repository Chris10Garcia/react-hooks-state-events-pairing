import React from "react"

//onClick={(e) => console.log(e.target.name + " was clicked")} 
// onClick={(e) => console.log(e.target.name + " was clicked")}

function Button({voteData, thumbEmjoi, handleVotes}){
    const {upvotes, downvotes} = voteData
    const correctButton = thumbEmjoi === "👍" 
        ? <button name = {"up"}   onClick={handleVotes} >{upvotes} 👍</button>
        : <button name = {"down"} onClick={handleVotes} >{downvotes} 👎</button>
    return(
        <>
            {correctButton}
        </>
    )
}


export default Button
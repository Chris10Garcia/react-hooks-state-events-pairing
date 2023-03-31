import React from "react"

//onClick={(e) => console.log(e.target.name + " was clicked")} 
// onClick={(e) => console.log(e.target.name + " was clicked")}

function Button({voteData, thumbEmjoi, handleVotes, name}){
    const votes = voteData[name]
    
    const correctButton = thumbEmjoi === "👍" 
        ? <button name = {name}   onClick={handleVotes} >{votes} 👍</button>
        : <button name = {name}   onClick={handleVotes} >{votes} 👎</button>
    console.log(votes)
    return(
        <>
            {correctButton}
        </>
    )
}


export default Button
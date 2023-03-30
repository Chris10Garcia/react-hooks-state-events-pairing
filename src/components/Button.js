import React from "react"

//onClick={(e) => console.log(e.target.name + " was clicked")} 
// onClick={(e) => console.log(e.target.name + " was clicked")}

function Button({upvotes, downvotes, thumbEmjoi}){
    const correctButton = thumbEmjoi === "👍" 
        ? <button name = {"thump up"} >{upvotes} 👍</button>
        : <button name = {"thump down"} >{downvotes} 👎</button>
    return(
        <>
            {correctButton}
        </>
    )
}


export default Button
import React from "react";




function ShowHide({handleShowComment, showComments}){

    return (
        <button onClick = {handleShowComment}>
            {showComments? "Hide Comments" : "Show Comments"}</button>
    )
}


export default ShowHide
import React from "react"


function Comment ({user, comment, children}){
    return(
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            {children}
        </div>
    )
}


export default Comment
import React from "react"


function TitleSubtitle({title, views, createdAt, children}){
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} | {createdAt}</p>
            <div>
                {children}
            </div>
            
        </div>
    )
}


export default TitleSubtitle
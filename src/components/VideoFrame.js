import React from 'react'



function VideoFrame({embedUrl, title}){
    return(    
        <iframe
            width="919"
            height="525"
            src= {embedUrl}
            frameBorder="0"
            allowFullScreen
            title= {title}
        />
    )
}


export default VideoFrame
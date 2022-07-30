import React, { useState } from "react";
import "./Meme.css"
function Meme({memeData}) {
    const [topComment, setTopComment]=useState('')
    const [bottomComment, setBottomComment]=useState('')
    if (!memeData) {
        return <div>Loading ...</div>
    }
 
    return (
    <>
  <main>

  <div className="meme_input">
        <input type="text" value ={topComment} placeholder= "Meme Top Text"  onChange={(e)=>setTopComment(e.target.value)}/>
         <input type="text" value={bottomComment} placeholder= "Meme Bottom Text"  onChange={(e)=>setBottomComment(e.target.value)}/>
     </div>
     <h2>{memeData.name}</h2>
     <div className="meme">
     <img src={memeData.url} alt={memeData.name} />
     <div className="user_meme_input top">{topComment}</div>
     <div className="user_meme_input bottom">{bottomComment}</div>
     </div>
     
  </main>
   

     
    
      
    </>


     
    )

}

export default Meme
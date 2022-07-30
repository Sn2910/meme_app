import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Meme from './Meme';
const url = "https://api.imgflip.com/get_memes" ;
function App() {
  const[memeData,setMemeData] = useState([])
  const [memeIndex,setMemeIndex] =useState(0)
  const[file,setFile] =useState("")
  const[preview,setPreview] =useState("")

  async function loadMemePicIUrls() {
    const response = await fetch( url)
    const result = await response.json()
  /*   console.log(result.data) */
     const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    console.log(result.data.memes)
    setMemeData(result.data.memes) 
    setMemeIndex(randomIndex)
  }

  useEffect(() => {
    loadMemePicIUrls()
  }, []) 
  function handleChange(e){
    let selectedFile = e.target.files[0]
setFile(selectedFile)
const filePreview =URL.createObjectURL(selectedFile)
setPreview(filePreview)
/*   console.warn('data file uploaded') */

  
 }
 function handleClick(){
  const formData = new FormData();
  formData.append
 }
 
 
 

  return (
    <div className="App">
      <h1>Create a Meme</h1>
    {file && <img src ={preview}/>}
    <Meme memeData={memeData[memeIndex]}/>
    <div className="meme_btn">
    <button onClick={()=>setMemeIndex(memeIndex+1)}>Prev Memes</button>
     <button onClick={()=>setMemeIndex(memeIndex-1)}>Next Memes</button>
     

    </div>
    <div className="meme_fileUpload" onClick={handleClick}>
        <input type="file" name="file" id="" onChange={(e)=>handleChange(e)}/>
     </div>

    

      
     
     
    
       
    </div>
  );
}

export default App;

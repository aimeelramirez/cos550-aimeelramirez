import React, { useState, useRef} from "react";
import axios from 'axios';
import Loader from "./Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
  // const [post, setPost] = useState<any>();
  // const [promptPost, setPrompt] = useState<any>();
  const [clickRef, setClick]= useState<any>(false);

  const inputRef = useRef<any>(null);
  const [state, setState]= useState<any>([]);
 
 
  function handleClearClick(e:any) {
    setState([]);

  }
  function handleClick(e:any) {
    e.preventDefault();
    console.log(e.target[0].value)
    let result = "In NABRE Bible, " + e.target[0].value + " Provide a verse supporting results.";
    postUserPrompt(result);
    
  }
const HandleShow =()=> {
  if(state.length > 0){
   return ( <ul>{state.map((element:any, i:number) => {
    return(<li key={i}>{element} <hr/></li>)
   })
   }</ul>  )
  }else{
    return(<p>Cleared.</p>)
  }
  }
  async function postUserPrompt(prompt:any) {
    try {
      alert(prompt)
      const response = await axios.post('https://cos550-aimeelramirez-api.herokuapp.com/api', {prompt:prompt});
      state.push(response.data);  

      console.log(response);

      setClick(true);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  //create a loader
  if (loaded === false) {
    setTimeout(() => {
      setLoaded(true);
    }, 8000);

    return (
      <div id="Loader" style={{ paddingTop:'5%', textAlign: 'center', margin: '0 auto' }}>
        <div
          onClick={() => {
            setLoaded(true);
          }}
        >
          <Loader />
        </div>
      </div>
    );
  } else {
if(clickRef === true && state){
  setClick(false);

return(
  <div className="App">
  <header className="App-header">
   <p> PraiseAI</p>
      
     <button title={'Clear'}  onClick={handleClearClick} type="submit">clear</button>

   <div className="content">
   <hr/>
   </div>
    <form ref={inputRef}  onSubmit={handleClick} >
    <textarea>Write something here</textarea>
    <hr/>
    <button title={'Submit'} type="submit">Submit</button>
    </form>
  </header>
<footer>Hi Mommy Milagros</footer>
</div>
)
    }else{
      
    return (
      <div className="App">
        <header className="App-header">
         <p> PraiseAI</p>
           <HandleShow/>
            
           <button title={'Clear'}  onClick={handleClearClick} type="submit">clear</button>

         <div className="content">
         <hr/>
         </div>
          <form ref={inputRef}  onSubmit={handleClick} >
          <textarea>Write something here</textarea>
          <hr/>
          <button title={'Submit'} type="submit">Submit</button>
          </form>
        </header>
      <footer>Hi Mommy Milagros</footer>
      </div>
    );
  }
}
}

export default App;

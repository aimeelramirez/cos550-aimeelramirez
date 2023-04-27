import React, { useState, useRef} from "react";
import axios from 'axios';
import Loader from "./Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
  const [clickRef, setClick]= useState<any>(false);
  const [hasClicked, setHasClicked]= useState<any>(false);

  const inputRef = useRef<any>(null);
  const [state, setState]= useState<any>([]);
 
 
  function handleClearClick(e:any) {
    setState([]);

  }
  function handleClick(e:any) {
    e.preventDefault();
    console.log(e.target[0].value)
    postUserPrompt(e.target[0].value);
    
  }
const HandleShow =()=> {
  state.reverse()
  if(state.length > 0){
    console.log(state)
   return ( <><ul>{state.map((element:any, i:number) => {
    return(<li key={state.id}><p>Q: {element.prompt}</p>A: {element.data}</li>)
   })
   }</ul> </> )
  }else{
    return(<p>{hasClicked ? "Cleared." : ""}</p>)
  }
  }
  async function postUserPrompt(prompt:any) {
    try {
      let result = "In NABRE Bible, " + prompt + " Provide a verse supporting results.";
      const response = await axios.post('https://cos550-aimeelramirez-api.herokuapp.com/api', {prompt:result});
      state.push({id: state.length+1,prompt, data:response.data});  

      console.log(response);

      setClick(true);
      setHasClicked(true);

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
   <h1>PraiseAI</h1>
   </header>
   {hasClicked ? <><div className="box">
       <HandleShow/></div>
      <button title={'Clear'}  onClick={handleClearClick} type="submit">clear</button></>
: ''}
   <div className="content">
   <hr/>
    <form ref={inputRef}  onSubmit={handleClick} >
    <textarea>Why is the sky blue?</textarea>
    <hr/>
    <p>Please provide a question to the prompt above.</p>
    <button title={'Submit'} type="submit">Submit</button>
    </form>
    </div>
<footer id="footer">Hi Mommy Milagros</footer>
</div>
)
    }else{
      
    return (
      <div className="App">
      <header className="App-header">
      <h1>PraiseAI</h1>
      {hasClicked ? <><div className="box">
       <HandleShow/></div>
      <button title={'Clear'}  onClick={handleClearClick} type="submit">clear</button></>
: ''}
         </header>
         <div className="content">
         <hr/>
          <form ref={inputRef}  onSubmit={handleClick} >
          <textarea>Why is the sky blue?</textarea>
          <hr/>
          <p>Please provide a question to the prompt above.</p>
          <button title={'Submit'} type="submit">Submit</button>
          </form>
          </div>
      <footer  id="footer"> Hi Mommy Milagros</footer>
      </div>
    );
  }
}
}

export default App;

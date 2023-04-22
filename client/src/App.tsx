import React, { useState, useRef} from "react";
import axios from 'axios';
import Loader from "./Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
  const [post, setPost] = useState<any>('');
  const [promptPost, setPrompt] = useState<any>('');
  const [clickRef, setClick]= useState<any>(false);

  const inputRef = useRef<any>(null);
  const [state, setState]= useState<any>([]);
 
 
  function handleClearClick(e:any) {
    setState([]);

  }
  function handleClick(e:any) {
    e.preventDefault();
    console.log(e.target[0].value)
    setPost(e.target[0].value);
    postUserPrompt(e.target[0].value)
    
  }
const HandleShow =()=> {
   return ( <ul>{state.map((element:any, i:number) => {
    return(<li>{state[i]} <hr/></li>)
   })
   }</ul>  )
  }
  async function postUserPrompt(prompt:any) {
    try {
      const response = await axios.post('https://private-5a988-cos550aimeelramirezapi.apiary-mock.com/api', {prompt});
      console.log(response);
      console.log(state)
      setPrompt(response.data.choices[0].message.content)
      setClick(true);
      state.push(promptPost);  
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

import React, { useState, useRef } from "react";
import Loader from "./Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
  const [post, setPost] = useState<any>();
  const inputRef = useRef<any>(null);

  function handleClick(e:any) {
    e.preventDefault();
    console.log(e.target[0].value)
    setPost(e.target[0].value)
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
    return (
      <div className="App">
        <header className="App-header">
         <p> PraiseAI</p>
         <p>{post}</p>
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

export default App;

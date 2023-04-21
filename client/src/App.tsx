import React, { useState } from "react";
import Loader from "./Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
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
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > */}
           Under Construction
          
        </header>
      </div>
    );
  }
}

export default App;

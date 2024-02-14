import React, { useState, useRef } from "react";
import axios from "axios";
import Loader from "./Loader/Loader";
import LoaderData from "./Loader/LoaderData";

import "./App.css";

function App() {
  const [loaded, setLoaded] = useState<any>(false);
  const [clickRef, setClick] = useState<any>(false);
  const [hasClicked, setHasClicked] = useState<any>(false);
  const inputRef = useRef<any>(null);
  const [submit, setSubmit] = useState<any>(false);
  const [submitPrint, setSubmitPrint] = useState<any>(false);
  const [state, setState] = useState<any>([]);
  const link = document.createElement("a");
  // Add file name
  let result: any;
  link.download = "history.txt";

  const validate = (prompt: any) => {
    if (prompt == null || prompt === "") {
      alert("Please input a text before submitting.");
      return false;
    } else {
      return true;
    }
  };
  function handlePrint() {
    link.click();
    URL.revokeObjectURL(link.href);
  }
  function handleClearClick(e: any) {
    setState([]);
    setSubmitPrint(true);
  }
  function handleClick(e: any) {
    e.preventDefault();

    console.log(e.target[0].value);
    let validated = validate(e.target[0].value);
    if (validated) {
      postUserPrompt(e.target[0].value);
      setSubmit(true);
    }
  }
  const HandleShow = () => {
    if (state.length > 0) {
      result = state
        .slice(0)
        .reverse()
        .map((element: any, k: number) => {
          let data = [];
          for (let i = 0; i < element.data.length; i++) {
            data.push(element.data[i].replace("“", '"').replace("”", '"'));
          }
          return (
            `\n${k + 1}. Question: ` +
            element.prompt +
            `\n Answer:${data.join("")}\n`
          );
        });
      link.href = URL.createObjectURL(
        new Blob(result, { type: "application/html" })
      );
      return (
        <>
          <ul>
            {state
              .slice(0)
              .reverse()
              .map((element: any, i: number) => {
                return (
                  <li key={state.id}>
                    {" "}
                    <p>
                      <b>{i + 1}.</b> <i>Q:</i> {element.prompt}
                    </p>
                    <p>
                      <i>A:</i> {element.data}
                    </p>
                  </li>
                );
              })}
          </ul>{" "}
        </>
      );
    } else {
      return (
        <p>
          {hasClicked ? <p style={{ textAlign: "center" }}>Cleared.</p> : ""}
        </p>
      );
    }
  };
  async function postUserPrompt(prompt: any) {
    try {
      let result =
        "In NABRE Bible, " +
        prompt +
        " Provide a reason and a verse supporting results in at least one paragraph.";
      const response = await axios.post(
        "https://cos550-aimeelramirez-api.herokuapp.com/api",
        { prompt: result }
      );
        console.log(response);
      state.push({ id: state.length + 1, prompt, data: response.data.content });

      console.log(response);
      setSubmit(false);
      setHasClicked(true);
      setClick(true);
      setSubmitPrint(false);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  //create a loader
  if (loaded === false) {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);

    return (
      <div
        id="Loader"
        style={{ paddingTop: "5%", textAlign: "center", margin: "0 auto" }}
      >
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
    if (clickRef === true && state) {
      setClick(false);
      return (
        <div className="App">
          <header className="App-header">
            <h1>PraiseAI</h1>
          </header>
          {state.length === 0 ? (
            <>
              <div className="box">
                <HandleShow />
              </div>
              <button
                title={"Clear"}
                onChange={submitPrint}
                onClick={handleClearClick}
                type="submit"
              >
                clear
              </button>
              {submitPrint ? (
                ""
              ) : (
                <button title={"Print"} onClick={handlePrint} type="submit">
                  Print
                </button>
              )}
            </>
          ) : (
            ""
          )}
          <div className="content">
            <hr />
            <form ref={inputRef} onSubmit={handleClick}>
              <textarea>Why is the sky blue?</textarea>
              <hr />
              <p>Please provide a question to the prompt above.</p>
              {submit ? (
                <ul id="loadData">
                  <li>
                    <button
                      title={"Submit"}
                      onChange={submit}
                      type="submit"
                      disabled
                    >
                      Submit
                    </button>
                  </li>
                  <li>
                    <LoaderData />
                  </li>
                </ul>
              ) : (
                <button title={"Submit"} type="submit">
                  Submit
                </button>
              )}
            </form>
          </div>
          <footer id="footer">Hi Mommy Milagros</footer>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>PraiseAI v2</h1>
            {hasClicked ? (
              <>
                <div className="box">
                  <HandleShow />
                </div>
                <button
                  title={"Clear"}
                  onChange={submitPrint}
                  onClick={handleClearClick}
                  type="submit"
                >
                  clear
                </button>
                {submitPrint ? (
                  ""
                ) : (
                  <button title={"Print"} onClick={handlePrint} type="submit">
                    Print
                  </button>
                )}
              </>
            ) : (
              ""
            )}
          </header>
          <div className="content">
            <hr />
            <form ref={inputRef} onSubmit={handleClick}>
              <textarea>Why is the sky blue?</textarea>
              <hr />
              <p>Please provide a question to the prompt above.</p>
              {submit ? (
                <ul id="loadData">
                  <li>
                    <button
                      title={"Submit"}
                      onChange={submit}
                      type="submit"
                      disabled
                    >
                      Submit
                    </button>
                  </li>
                  <li>
                    <LoaderData />
                  </li>
                </ul>
              ) : (
                <button title={"Submit"} type="submit">
                  Submit
                </button>
              )}
            </form>
          </div>
          <footer id="footer"> Hi Mommy Milagros</footer>
        </div>
      );
    }
  }
}

export default App;

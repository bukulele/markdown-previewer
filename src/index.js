import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import DOMPurify from "dompurify";
import "./index.css";
import Window from "./Window";
import InputArea from "./InputArea";
import MarkedArea from "./MarkedArea";
import file from "./initialMarked.md";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
});

function App() {
  const [input, setInput] = useState("");
  const [markedText, setMarkedText] = useState(null);
  const [windows, setWindows] = useState({ window1: false, window2: false });

  function handleInput(event) {
    setInput(event.target.value);
    markText(event.target.value);
  }

  function markText(text) {
    const dirtyInput = marked(text);
    const cleanedInput = DOMPurify.sanitize(dirtyInput);
    setMarkedText(cleanedInput);
  }

  useEffect(() => {
    fetch(file)
      .then((result) => result.text())
      .then((text) => {
        setInput(text);
        markText(text);
      });
  }, []);

  const onFullScreen = (window) => {
    setWindows((state) => ({
      ...state,
      [window]: !state[window],
    }));
  };

  return (
    <div className='content-box'>
      {windows.window2 || (
        <Window
          titleName='Text to be marked'
          windowContent={<InputArea input={input} handleInput={handleInput} />}
          onFullScreen={() => onFullScreen("window1")}
          isWindowFullScreen={windows.window1}
        />
      )}

      {windows.window1 || (
        <Window
          titleName='Marked result'
          windowContent={<MarkedArea markedText={markedText} />}
          onFullScreen={() => onFullScreen("window2")}
          window={windows.window2}
        />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

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

  return (
    <div className="content-box">
      <Window
        titleName="Text to be marked"
        windowContent={<InputArea input={input} handleInput={handleInput} />}
      />
      <Window
        titleName="Marked result"
        windowContent={<MarkedArea markedText={markedText} />}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

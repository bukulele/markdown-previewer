import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import DOMPurify from "dompurify";
import "./index.css";
import Window from "./components/Window/Window";
import InputArea from "./components/InputArea/InputArea";
import MarkedArea from "./components/MarkedArea/MarkedArea";
import file from "./assets/initialMarked.md";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import windowStyles from "./components/Window/Window.module.css";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
});

function App() {
  const [input, setInput] = useState("");
  const [markedText, setMarkedText] = useState(null);
  const [windowClassName, setWindowClassName] = useState("window");
  const [visibility, setVisibility] = useState(true);

  const requestingWindow = useRef(null);

  function handleInput(event) {
    setInput(event.target.value);
    markText(event.target.value);
  }

  function markText(text) {
    const dirtyInput = marked(text);
    const cleanedInput = DOMPurify.sanitize(dirtyInput);
    setMarkedText(cleanedInput);
  }

  const changeVisibility = () => {
    setVisibility(!visibility);
    setWindowClassName(visibility ? "invisible" : "window");
  };

  const setRequestingWindow = (object) => {
    requestingWindow.current = object.current;
  };

  useEffect(() => {
    fetch(file)
      .then((result) => result.text())
      .then((text) => {
        setInput(text);
        markText(text);
      });
  }, []);

  useEffect(() => {
    if (!visibility)
      requestingWindow.current.className = windowStyles.biggerWindow;
  }, [visibility]);

  return (
    <div className="content-box">
      <Window
        setRequestingWindow={setRequestingWindow}
        className={windowClassName}
        changeVisibility={changeVisibility}
        titleName="Text to be marked"
      >
        <InputArea input={input} handleInput={handleInput} />
      </Window>
      <Window
        setRequestingWindow={setRequestingWindow}
        className={windowClassName}
        changeVisibility={changeVisibility}
        titleName="Marked result"
      >
        <MarkedArea markedText={markedText} />
      </Window>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import { useEffect, useState } from "react";
import {
  faExpandArrowsAlt,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import ResizeButton from "./ResizeButton";

function Window(props) {
  const [windowSizeIsSmall, setWindowSize] = useState(true);
  const [name, setName] = useState("window");

  function changeWindowSize(event) {
    setWindowSize(!windowSizeIsSmall);
    for (
      let elem = event.target;
      elem.className !== "content-box";
      elem = elem.parentNode
    ) {
      if (elem.className === "window") {
        setName("bigger-window");
      } else if (elem.className === "bigger-window") {
        setName("window");
      }
    }
  }

  useEffect(() => {
    if (document.getElementsByClassName("bigger-window").length > 0) {
      let elements = document.getElementsByClassName("window");
      for (let elem of elements) {
        elem.className = "window invisible";
      }
    } else {
      let elements = document.getElementsByClassName("window invisible");
      for (let elem of elements) {
        elem.className = "window";
      }
    }
  }, [name]);

  return (
    <div className={name}>
      <div className="title-bar">
        <p>{props.titleName}</p>
        <ResizeButton
          showPath={props.showPath}
          icon={windowSizeIsSmall ? faExpandArrowsAlt : faCompressArrowsAlt}
          changeWindowSize={changeWindowSize}
        />
      </div>
      <div className="windowContent">{props.windowContent}</div>
    </div>
  );
}

export default Window;

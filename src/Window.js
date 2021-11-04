import { useState, useRef } from "react";
import {
  faExpandArrowsAlt,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import ResizeButton from "./ResizeButton";

function Window(props) {
  const [windowSizeIsSmall, setWindowSize] = useState(true);

  const requestingWindow = useRef();

  function changeWindowSize() {
    setWindowSize(!windowSizeIsSmall);
    props.setRequestingWindow(requestingWindow);
  }

  return (
    <div className={props.className} id={props.id} ref={requestingWindow}>
      <div className="title-bar">
        <p>{props.titleName}</p>
        <ResizeButton
          changeVisibility={props.changeVisibility}
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

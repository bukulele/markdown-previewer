import { useState, useRef } from "react";
import {
  faExpandArrowsAlt,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import ResizeButton from "../ResizeButton/ResizeButton";
import styles from "./Window.module.css";

function Window({
  setRequestingWindow,
  className,
  titleName,
  changeVisibility,
  changeWindowSize,
  children,
}) {
  const [windowSizeIsSmall, setWindowSize] = useState(true);

  const requestingWindow = useRef();

  function changeWindowSize() {
    setWindowSize(!windowSizeIsSmall);
    setRequestingWindow(requestingWindow);
  }

  return (
    <div
      className={className === "window" ? styles.window : styles.invisible}
      ref={requestingWindow}
    >
      <div className={styles.titleBar}>
        <p className={styles.text}>{titleName}</p>
        <ResizeButton
          changeVisibility={changeVisibility}
          icon={windowSizeIsSmall ? faExpandArrowsAlt : faCompressArrowsAlt}
          changeWindowSize={changeWindowSize}
        />
      </div>
      <div className={styles.windowContent}>{children}</div>
    </div>
  );
}

export default Window;

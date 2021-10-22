import {
  faExpandArrowsAlt,
  faCompressArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import ResizeButton from "./ResizeButton";

function Window(props) {
  const style = props.isWindowFullScreen ? "bigger-window" : "window";

  return (
    <div className={style}>
      <div className='title-bar'>
        <p>{props.titleName}</p>
        <ResizeButton
          showPath={props.showPath}
          icon={
            props.isWindowFullScreen ? faCompressArrowsAlt : faExpandArrowsAlt
          }
          onClick={props.onFullScreen}
        />
      </div>
      <div className='windowContent'>{props.windowContent}</div>
    </div>
  );
}

export default Window;

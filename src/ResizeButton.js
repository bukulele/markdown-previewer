import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResizeButton(props) {
  return (
    <button onClick={props.changeWindowSize} className="resizeButton">
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
}

export default ResizeButton;

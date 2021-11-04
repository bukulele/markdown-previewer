import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResizeButton(props) {
  const onClick = () => {
    props.changeVisibility();
    props.changeWindowSize();
  };

  return (
    <button onClick={onClick} className="resizeButton">
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
}

export default ResizeButton;

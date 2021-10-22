import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResizeButton({ onClick, icon }) {
  return (
    <button onClick={onClick} className='resizeButton'>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default ResizeButton;

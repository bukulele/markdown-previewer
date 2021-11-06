import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ResizeButton.module.css";

function ResizeButton({ changeVisibility, changeWindowSize, icon }) {
  const onClick = () => {
    changeVisibility();
    changeWindowSize();
  };

  return (
    <button onClick={onClick} className={styles.resizeButton}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default ResizeButton;

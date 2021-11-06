import styles from "./MarkedArea.module.css";

function MarkedArea({ markedText }) {
  return (
    <div
      id="preview"
      className={styles.markedArea}
      dangerouslySetInnerHTML={{ __html: markedText }}
    ></div>
  );
}

export default MarkedArea;

import styles from "./InputArea.module.css";

function InputArea({ handleInput, input }) {
  return (
    <textarea
      id="editor"
      className={styles.inputArea}
      onChange={handleInput}
      value={input}
    ></textarea>
  );
}

export default InputArea;

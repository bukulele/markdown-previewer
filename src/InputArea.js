function InputArea(props) {
  return (
    <textarea
      id="editor"
      className="inputArea inner-window-area"
      onChange={props.handleInput}
      value={props.input}
    ></textarea>
  );
}

export default InputArea;

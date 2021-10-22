function MarkedArea(props) {
  return (
    <div
      id="preview"
      className="markedArea inner-window-area"
      dangerouslySetInnerHTML={{ __html: props.markedText }}
    ></div>
  );
}

export default MarkedArea;

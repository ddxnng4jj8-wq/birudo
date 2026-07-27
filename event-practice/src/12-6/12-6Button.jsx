const Button126 = (props) => {
  return (
    <button onClick={props.onClick} onMouseOver={props.onMouseOver}>
      {props.children}
    </button>
  );
};

export default Button126;
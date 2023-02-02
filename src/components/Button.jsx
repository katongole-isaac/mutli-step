const Button = ({ name, handleClick, ...other }) => {
  return (
    <>
      <button type="button" id="btn" onClick={handleClick} {...other}>
        {name}
      </button>
    </>
  );
};

export default Button;

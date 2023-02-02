const MainHeader = ({ header, info }) => {
  return (
    <>
      <div className="header">
        <h2> {header} </h2>
        <p>{info}</p>
      </div>
    </>
  );
};

export default MainHeader;

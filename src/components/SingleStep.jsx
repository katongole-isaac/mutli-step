const SingleStep = ({ index, stepValue, currentStep }) => {
  return (
    <>
      <div className="step">
        <div className={` num ${index === currentStep ? "active-step" : ""}`}>
          <span> {index} </span>
        </div>
        <div className="info">
          <span> STEP {index} </span>
          <span> {stepValue.toUpperCase()} </span>
        </div>
      </div>
    </>
  );
};

export default SingleStep;

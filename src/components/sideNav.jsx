import SingleStep from "./SingleStep";

const SideNav = ({ step }) => {
  const steps = [
    {
      stepName: "your info",
    },
    {
      stepName: "select plan",
    },
    {
      stepName: "add-ons",
    },
    {
      stepName: "summary",
    },
  ];

  return (
    <>
      <div className="sidebar-nav">
        {steps.map(({ stepName }, i) => (
          <SingleStep
            key={stepName}
            index={++i}
            stepValue={stepName}
            currentStep={step}
          />
        ))}
      </div>
    </>
  );
};

export default SideNav;

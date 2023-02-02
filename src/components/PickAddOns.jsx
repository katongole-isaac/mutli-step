import * as constants from "../utils/constants";
import MainHeader from "./MainHeader";

const PickAddOns = ({
  pickCardContent,
  handlePickAddOns,
  checkBoxRefs,
  yourPlan,
  addOnErr,
}) => {
  return (
    <>
      <div className="pick-addons">
        <MainHeader
          header="Pick add-ons"
          info="  Add-ons help enhance your gaming experience.
"
        />
        {addOnErr && (
          <div className="error">
            <span>You must pick atleast one add-on </span>
          </div>
        )}
        <div className="cardlist">
          {/* <span className="material-symbols-outlined">check</span> */}

          {pickCardContent.map((card, i) =>
            React.cloneElement(
              <AddOnCard
                key={card.boldText}
                {...card}
                yourPlan={yourPlan}
                handlePickAddOns={handlePickAddOns}
              />,
              { ref: checkBoxRefs[i] }
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PickAddOns;

const AddOnCard = React.forwardRef(
  (
    {
      boldText,
      smallText,
      monthlyPrice,
      yearlyPrice,
      handlePickAddOns,
      yourPlan,
      isSelected,
    },
    ref
  ) => {
    return (
      <>
        <div className={`add-on-card ${isSelected ? "isSelected" : ""} `}>
          <div className="checkbox">
            <input
              type="checkbox"
              name={boldText}
              id="chckbox"
              ref={ref}
              onClick={() => handlePickAddOns({ boldText, ref })}
            />
          </div>
          <div className="card-content">
            <div>
              <span> {boldText} </span>
              <span> {smallText} </span>
            </div>
            <div>
              {yourPlan === constants.yearly ? (
                <span> +${yearlyPrice}/yr </span>
              ) : (
                <span> +${monthlyPrice}/mo </span>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

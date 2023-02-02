import MainHeader from "./MainHeader";

import * as constants from "../utils/constants";
import { useCallback, useEffect } from "react";

const SelectPlan = ({
  plan,
  handleChangePlan,
  planPrices,
  handleSelectedPlan,
  selectedPlan,
}) => {
  return (
    <>
      <div className="selector-plan">
        <MainHeader
          header="Select your Plan"
          info="  You have the option of monthly or yearly billing."
        />

        <div className="card-container">
          {planPrices.map((card) => (
            <Card
              key={card.alt}
              {...card}
              plan={plan}
              selectedPlan={selectedPlan}
              handleSelectedPlan={handleSelectedPlan}
            />
          ))}
        </div>

        <div className="price-switch">
          <div
            className={` plans ${plan === constants.monthly ? "monthly" : ""}`}
          >
            <span>Monthly</span>
          </div>
          <div className="toggle" role="button" onClick={handleChangePlan}>
            <div
              className={`ball ${
                plan === constants.yearly ? "ball-isToggled" : ""
              }`}
            ></div>
          </div>
          <div className={`plans ${plan === constants.yearly ? "yearly" : ""}`}>
            <span>Yearly</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;

const Card = ({
  srcUrl,
  alt,
  cardName,
  yPrice,
  mPrice,
  plan,
  handleSelectedPlan,
  selectedPlan,
}) => {
  return (
    <>
      <div
        onClick={() =>
          handleSelectedPlan({
            cardName,
          })
        }
        className={`card ${
          selectedPlan.cardName === cardName ? "isSelected" : ""
        }`}
      >
        <div className="image">
          <img src={srcUrl} alt={alt} />
        </div>
        <div className="card-content">
          <span>{cardName} </span>
          {plan === constants.yearly ? (
            <>
              <small>${yPrice}/yr</small>
              <span> 2 months free</span>
            </>
          ) : (
            <small>${mPrice}/mo</small>
          )}
        </div>
      </div>
    </>
  );
};

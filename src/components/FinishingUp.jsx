import { useCallback, useEffect, useRef, useState } from "react";
import * as constants from "../utils/constants";
import MainHeader from "./MainHeader";
import MonthlyPrice from "./MonthlyPrice";
import YearlyPrice from "./YearlyPrice";

const FinishingUp = ({ yourPlan, cart, totalPlanPrices, setStep }) => {
  const divRef = useRef();

  return (
    <>
      <div className="finishing-up">
        <MainHeader
          header="Finishing Up"
          info="  Double-check everything looks OK before confirming."
        />

        <div className="finishItems" ref={divRef}>
          {cart.map((item, idx) => (
            <SingleItem
              key={item.boldText}
              {...item}
              idx={idx}
              yourPlan={yourPlan}
              setStep={setStep}
            />
          ))}
        </div>
        <div className="total">
          <TotalPrice totalPrice={totalPlanPrices} yourPlan={yourPlan} />
        </div>
      </div>
    </>
  );
};

const TotalPrice = ({ totalPrice, yourPlan }) => (
  <>
    <span> Total (per month) </span>
    <span>
      {yourPlan === constants.monthly
        ? `+$${totalPrice.monthly}/mo`
        : `+$${totalPrice.yearly}/yr`}
    </span>
  </>
);

export default FinishingUp;

const SingleItem = ({
  yourPlan,
  boldText: cardName,
  monthlyPrice,
  yearlyPrice,
  idx,
  setStep,
}) => {
  const capitalize = useCallback(
    (str) => {
      return str
        .match(/[\b\w\b]+/g)
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
    },
    [yourPlan]
  );

  return (
    <>
      <div className={` ${idx === 0 ? "cardItem" : "notActive"}  `}>
        <div>
          <span>
            {cardName} ({capitalize(yourPlan)})
          </span>
          {yourPlan !== constants.yearly ? (
            <MonthlyPrice price={monthlyPrice} />
          ) : (
            <YearlyPrice price={yearlyPrice} />
          )}
        </div>
        {idx === 0 && (
          <div>
            <a href="#" onClick={() => setStep(2)}>
              {" "}
              Change{" "}
            </a>
          </div>
        )}
        {idx === 0 && <hr />}
      </div>
    </>
  );
};

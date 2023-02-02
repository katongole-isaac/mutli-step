import React, { useEffect, useState } from "react";
import "./sass/index.scss";

import SideNav from "./components/sideNav";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlain";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import Button from "./components/Button";
import * as constants from "./utils/constants";
import { planPrices as _planPrices } from "./utils/planPrices";
import { pickCardContent as _pickCardContent } from "./utils/addOns";

export default function () {
  const lastStep = 5;
  const [step, setStep] = useState(1);

  const [planPrices, setPlanPrices] = useState(_planPrices);

  const [selectedPlan, setSelectedPlan] = useState(planPrices[0]);

  const [pickCardContent, setPickCardContent] = useState(_pickCardContent);

  const [yourPlan, setYourPlan] = useState(constants.monthly);

  const [addOnErr, setAddOnErr] = useState(false);

  //pckgs that are to be taken
  const [cart, setCart] = useState([]);

  // total
  const [totalPlanPrices, setTotalPlanPrices] = useState({
    monthly: 0,
    yearly: 0,
  });

  useEffect(() => {
    setTotalPlanPrices((prev) => ({
      ...prev,
      monthly: cart.reduce((prev, curr) => curr.monthlyPrice + prev, 0),
      yearly: cart.reduce((prev, curr) => curr.yearlyPrice + prev, 0),
    }));
  }, [cart]);

  const handleSetCart = () => {
    setCart((prev) => [
      {
        boldText: selectedPlan.cardName,
        monthlyPrice: selectedPlan.mPrice,
        yearlyPrice: selectedPlan.yPrice,
      },
      ...pickCardContent.filter((addOn) => addOn.isSelected === true),
    ]);
  };

  useEffect(() => {
    handleSetCart();
  }, [pickCardContent, selectedPlan]);

  const checkBoxRefs = Array(pickCardContent.length)
    .fill("")
    .map(() => React.createRef());

  const handlePickAddOns = ({ boldText, ref }) => {
    setPickCardContent((prev) => [
      ...prev.map((item) =>
        item.boldText === boldText
          ? { ...item, isSelected: !item.isSelected }
          : item
      ),
    ]);

    handleSetCart();
  };

  //changing the plan i.e arcarde , adv , pro
  const handleSelectedPlan = ({ cardName }) => {
    const plan = planPrices.find((plan) => plan.cardName === cardName);

    setSelectedPlan(plan);
  };

  const handleChangePlan = () => {
    setYourPlan((prev) => {
      if (prev === constants.monthly) return constants.yearly;
      if (prev === constants.yearly) return constants.monthly;
    });
  };

  //  when u click next btn
  const handleClickNext = () => {
    if (step === 3 && cart.length === 1) {
      setAddOnErr(true);
      return;
    }

    setStep((prev) => {
      if (prev === lastStep || prev > lastStep) return lastStep;
      return ++prev;
    });
  };

  useEffect(() => {
    if (cart.length >= 2) {
      setAddOnErr(false);
    }

    // update the checkboxes
    pickCardContent.map((card) => {
      if (!card.isSelected) return;

      checkBoxRefs.map((ref) => {
        if (ref.current?.name === card.boldText) ref.current.checked = true;
      });
    });
  });

  //  when u click goBack btn
  const handleClickBack = () => {
    setStep((prev) => {
      if (prev === 1) return 1;

      return --prev;
    });
  };

  const handleSubmit = (values) => {
    localStorage.setItem("name", values.name);
    localStorage.setItem("email", values.email);
    localStorage.setItem("phone", values.phone);

    setTimeout(() => {
      handleClickNext();
    }, 100);
  };

  const components = [
    <PersonalInfo key={"s"} handleSubmit={handleSubmit} />,

    <SelectPlan
      key={"p"}
      plan={yourPlan}
      handleChangePlan={handleChangePlan}
      handleSelectedPlan={handleSelectedPlan}
      planPrices={planPrices}
      selectedPlan={selectedPlan}
    />,

    <PickAddOns
      key={"sp"}
      pickCardContent={pickCardContent}
      checkBoxRefs={checkBoxRefs}
      handlePickAddOns={handlePickAddOns}
      yourPlan={yourPlan}
      addOnErr={addOnErr}
    />,

    <FinishingUp
      key={"qw"}
      yourPlan={yourPlan}
      cart={cart}
      setStep={setStep}
      totalPlanPrices={totalPlanPrices}
    />,
    <ThankYou key={"th"} />,
  ];

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <SideNav step={step} />
          <div className="main">
            {components.map((component, idx) => {
              if (++idx === step) return component;
            })}

            {step !== 5 && step !== 1 && (
              <div className="ctrls">
                <div className="go-back">
                  {step !== 1 && (
                    <Button name="Go Back" handleClick={handleClickBack} />
                  )}
                </div>
                <div className={step === 4 ? "next" : ""}>
                  <Button
                    name={step !== 4 ? "Next Step" : "Confirm"}
                    handleClick={handleClickNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

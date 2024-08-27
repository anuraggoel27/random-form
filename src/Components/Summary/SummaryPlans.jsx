import React from "react";
import { useSelector, useDispatch } from "react-redux";
import stepIncreaseAction from "../../Redux/Steps/StepIncreaseAction";
import { stepJumpAction } from "../../Redux/Steps/StepJumpAction";

function SummaryPlans() {
  const dispatch = useDispatch();
  const planOption = useSelector((state) => state.form.planOption);
  const planType = useSelector((state) => state.form.planType);
  const addons = useSelector((state) => state.form.addons);
  const planOptionPrice = (planType === "Monthly") ? ("$"+planOption.monthlyPrice+"/mo") : ("$"+planOption.annualPrice+"/yr");
  function handleClick(){
    dispatch(stepJumpAction());
  }
  
  return (
    <div className="summary-box">
      <div className="summary-plans">
        <div className="summary-plans-details">
          <div className="summary-plans-details-type">
            {planOption.name} ({planType})
          </div>
          <div className="summary-plans-details-price">{planOptionPrice}</div>
        </div>
        <div className="summary-plan-change">
          <button onClick={handleClick}><u>Change</u></button>
        </div>
      </div>
      <hr/>
      <div className="summary-addons">
        {addons.map((addon, index) => {
          const addonPrice = (planType === "Monthly") ? ("+$"+addon.monthlyPrice+"/mo") : ("+$"+addon.annualPrice+"/yr");
          return <div key={index} className="summary-addon">
            <div className="summary-addon-name">{addon.value}</div>
            <div className="summary-addon-price">{addonPrice}</div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default SummaryPlans;

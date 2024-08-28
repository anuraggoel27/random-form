import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function SummaryPlan() {
    const storedPlanOption = useSelector((state) => state.form.planOption);
    const storedPlanType = useSelector((state)=>state.form.planType);
    const storedAddons = useSelector((state)=> state.form.addons);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(()=>{
      const planOptionPrice = (storedPlanType === "Monthly") ? storedPlanOption.monthlyPrice : storedPlanOption.annualPrice;
      const addonPrices = storedAddons.reduce((acc, curr)=>{
        if(storedPlanType === "Monthly"){
            return acc+curr.monthlyPrice;
        }else{
            return acc+curr.annualPrice;
        }
    }, 0)
        setTotalAmount(planOptionPrice+addonPrices);
    }, [storedAddons, storedPlanType, storedPlanOption])
    return ( 
        <div className="price-summary-container">
            <div className="price-summary-description">Total {storedPlanType === "Monthly" ? "(per month)" : "(per year)"}</div>
            <div className="price-summary-price">{totalAmount}{storedPlanType === "Monthly" ? "/mo" : "/yr"}</div>
        </div>
     );
}

export default SummaryPlan;
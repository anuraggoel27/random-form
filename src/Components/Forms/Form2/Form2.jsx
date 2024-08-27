import React, {useEffect, useState} from 'react';
import { Radiobutton } from './Radiobutton';
import { form2Fields, form2Headers } from './Form2Fields';
import Buttons from "../../Buttons/Buttons";
import { useSelector, useDispatch } from 'react-redux';
import Toggle from "./Toggle/Toggle";
import FormHeader from '../../FormHeader/FormHeader';
import plan_option_submit from '../../../Redux/FormData/FormPlanOptionAction';
import "./styles.css"

function Form2() {
    const storedPlanOption = useSelector((state) => state.form.planOption)
    const [planOption, setPlanOption] = useState(storedPlanOption);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!planOption || !planOption.name) return;
        setRadiobuttonActive(planOption.name)
    }, [planOption, dispatch, storedPlanOption])

    function handleChange(e){
        const planFromInput = e.target.id;
        if(planFromInput === "") return;
        const desiredPlanOption = form2Fields.filter((form) => form.value === planFromInput )[0]
        const { value: selectedOptionName , monthlyPrice: selectedOptionMonthlyPrice, annualPrice: selectedOptionAnnualPrice} = desiredPlanOption
        setPlanOption(() => {
            return {
                name: selectedOptionName,
                monthlyPrice: selectedOptionMonthlyPrice,
                annualPrice: selectedOptionAnnualPrice
            }
        })
        setRadiobuttonActive(planFromInput)
    }

    function setRadiobuttonActive(plan){
        const allElements = document.getElementsByClassName("radiobutton");
        for(let i=0;i<allElements.length;i++){
            allElements[i].classList.remove("active-radiobutton");
        }
        document.getElementById(plan+"-container").classList.add("active-radiobutton");
    }

    function handleClick(){
        if(!planOption.name){
            console.log("Invalid");
            return false;
        }
        dispatch(plan_option_submit(planOption))
        return true;
    }
    
    return ( 
        <div className="form-content">
            <FormHeader title={form2Headers.title} description={form2Headers.description} />
            <form className="form-body form2">
                <div className="form2-body">
                    {form2Fields.map((form, index)=>{
                        return <Radiobutton key={index} form={form} value={form.value} handleChange={handleChange}/> 
                    })}
                </div>
                <Toggle/>
            </form>
            <Buttons handleClick={handleClick}/>
        </div>
     );
}

export default Form2;
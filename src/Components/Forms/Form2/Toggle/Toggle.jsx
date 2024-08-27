import React, {useState , useEffect} from 'react';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import plan_type_submit from '../../../../Redux/FormData/FormPlanTypeAction';

function Toggle(props) {
    const planType = useSelector((state) => state.form.planType)
    const [option, setOption] = useState((planType === "Yearly"));
    const dispatch = useDispatch();
    useEffect(()=>{
        if(option){
            dispatch(plan_type_submit("Yearly"))
        }else{
            dispatch(plan_type_submit("Monthly"))
        }
        
    }, [option, dispatch])

    function handleClick(){
        setOption(option => {
            return !option
        })
    }
    return ( 
        <div className="toggle-container">  
            <p>Monthly</p>
            <div className={"toggle " + (option ? "on" : "off")} onClick={handleClick}>
                <div className="slider"></div>
            </div>
            <p>Yearly</p>
        </div>
     );
}

export default Toggle;
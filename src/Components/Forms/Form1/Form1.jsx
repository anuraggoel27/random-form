import React, {useEffect, useState} from 'react';
import { form1Fields, form1Headers } from './Form1Fields';
import { Input } from './Input';
import Buttons from "../../Buttons/Buttons"
import { useDispatch, useSelector } from 'react-redux';
import personal_info_submit from '../../../Redux/FormData/FormPersonalInfoAction';
import FormHeader from '../../FormHeader/FormHeader';
import "./styles.css";

function Form1() {
    const dispatch = useDispatch();
    const formDetails = useSelector((state) => state.form.personal_info)

    const [personalDetails, setPersonalDetails] = useState({
        name: formDetails.name,
        email: formDetails.email,
        phoneNumber: formDetails.phoneNumber
    })

    function handleChange(e){
        const {name, value} = e.target;
        setPersonalDetails((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }

    function handleClick(){
        const { name, email, phoneNumber} = personalDetails;
        if(name === ""){
            console.log("Invalid")
            return false
        }else if(email === ""){
            console.log("Invalid")
            return false
        }else if(phoneNumber === ""){
            console.log("Invalid")
            return false
        }
        dispatch(personal_info_submit(personalDetails));
        return true
    }

    return ( 
        <div className="form-content">
            <FormHeader title={form1Headers.title} description={form1Headers.description} />
            <form className="form-body">
                {form1Fields.map((form, index) => {
                    return (
                        <Input key={index} type="text" formDetails={personalDetails} form={form} handleChange={handleChange}/>
                    )
                })}
            </form>
            <Buttons handleClick={handleClick}/>
        </div>
     );
}

export default Form1;
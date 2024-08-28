import React, { useEffect, useMemo } from 'react';
import { Checkbox } from './Checkbox';
import { form3Fields, form3Headers } from './Form3Fields';
import Buttons from '../../Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import addon_submit from '../../../Redux/FormData/FormAddonAction';
import FormHeader from '../../FormHeader/FormHeader';
import "./styles.css"

function Form3() {
    const dispatch = useDispatch();
    const storedFormAddons = useSelector(state => state.form.addons);
    const addons = useMemo(()=> new Set(), []);
    useEffect(()=>{
        storedFormAddons.forEach((addon)=> addons.add(addon));
        addons.forEach((addon) => {
            addStyle(addon)
        })
    }, [storedFormAddons, addons])

    function addStyle(addon){
        document.getElementById(addon.inputName+"-checkbox").checked = true;
        document.getElementById(addon.inputName+"-container").classList.add("active")
    }
    function removeStyle(addon){
        document.getElementById(addon.inputName+"-checkbox").checked = false;
        document.getElementById(addon.inputName+"-container").classList.remove("active")
    }
    function handleChange(e){
        const addonFromInput = e.target.id;
        const newAddon = form3Fields.filter((form) => form.inputName === addonFromInput)[0];
        if(addons.has(newAddon)){
            addons.delete(newAddon)
            removeStyle(newAddon)
        }
        else{
            addons.add(newAddon)
            addStyle(newAddon)
        }
    }

    function handleClick(){
        const newArray = [];
        addons.forEach((addon)=>{
            newArray.push(addon)
        })
        dispatch(addon_submit(newArray));
        return true;
    }

    return ( 
        <div className="form-content">
            <FormHeader title={form3Headers.title} description={form3Headers.description} />
            <div className="form-body form3">
                <form className="form3-body">
                    {form3Fields.map((form, index)=>{
                        return <Checkbox key={index} form={form} handleChange={handleChange}/> 
                    })}
                </form>
            </div>
            <Buttons handleClick={handleClick}/>
        </div>
     );
}

export default Form3;
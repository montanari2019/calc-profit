import { ChangeEvent, useState } from "react"
import { InputProps } from "../../../model/InputProps"
import styleInput from "./InputProfitItem.module.css"

export function InputProfitItem({ labelName, inputType, placeholderName, inputValueProps}: InputProps){

    const [inputValue, setInputValue] = useState("")

    function handleInputValue(event: ChangeEvent<HTMLInputElement>){
        event.preventDefault()
        setInputValue(event.target.value.toLocaleString())
        inputValueProps(inputValue)
    }

    return(
        <div className={styleInput.container}>
            <label>{labelName}</label>
            <input type={inputType} placeholder={placeholderName} value={inputValue} onChange={handleInputValue}/>
            
        </div>
    )
}
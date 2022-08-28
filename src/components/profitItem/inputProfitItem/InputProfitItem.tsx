import { InputProps } from "../../../model/InputProps"
import styleInput from "./InputProfitItem.module.css"

export function InputProfitItem({ labelName, inputType, placeholderName}: InputProps){
    return(
        <div className={styleInput.container}>
            <label>{labelName}</label>
            <input type={inputType} placeholder={placeholderName}/>
        </div>
    )
}
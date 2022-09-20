export interface InputProps{
    labelName: string;
    inputType: string;
    placeholderName: string;
    inputValueProps: ( value: string) => void;
    handleInputCleanValue: ( value: string ) => void;
}
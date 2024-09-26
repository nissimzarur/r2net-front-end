import { SwitchProps } from "@mui/material";

export interface ISwitch extends SwitchProps{
    label?:string;
    handleOnChange:(checked:boolean) => void;
}
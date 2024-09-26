import { BaseSelectProps } from "@mui/material";

export interface ISelect extends BaseSelectProps{
    items: MenuItem[]
    helperText?:string
}

interface MenuItem {
    value: string | number,
    label: string
}
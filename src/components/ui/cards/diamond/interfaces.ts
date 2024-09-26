import { CardProps } from "@mui/material";
import { ShapeEnum } from "@utils/constants";

export interface ICardDiamond extends CardProps{
    price:number;
    isLabDiamond:boolean;
    shape: ShapeEnum;
}
import { ShapeEnum } from "@utils/interfaces";
import z from "zod";

export const PriceSchema = z.number({
  invalid_type_error: "Price must be a number",
}).optional();

export const ShapeSchema = z.nativeEnum(ShapeEnum, {
  message: "Invalid value, expected 'Round' | 'Princess' | 'Radiant'",
});

export const LabDiamondSchema = z.boolean({
  message: "Lab diamond must be on or off",
});

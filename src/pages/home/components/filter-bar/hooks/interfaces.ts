import { ShapeEnum } from "@utils/constants";
import { SafeParseReturnType } from "zod";

export type IHandleErrorResult =
  | SafeParseReturnType<boolean, boolean>
  | SafeParseReturnType<ShapeEnum, ShapeEnum>
  | SafeParseReturnType<number | undefined, number | undefined>;

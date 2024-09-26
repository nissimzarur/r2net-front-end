export interface IFilterInputs {
  price: number;
  shape: ShapeEnum;
  labDiamond: boolean;
}

export interface IDiamond{
  price: number;
  shape: string;
  color: string;
  clarity: string;
  carat: number;
  cut: string;
  isLabDiamond: boolean;
}

export enum ShapeEnum {
  ROUND = "Round",
  PRINCESS = "Princess",
  RADIANT = "Radiant",
  ALL = "All",
}

export interface DiamondDto {
  shape: ShapeEnum;
  price: number;
  isLabDiamond: boolean;
}

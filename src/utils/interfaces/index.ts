export interface IFilterInputs {
  price: number;
  shape: ShapeEnum;
  labDiamond: boolean;
}

export interface IDiamond {
  id: number;
  price: number;
  isLabDiamond: boolean;
  shape: ShapeEnum;
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

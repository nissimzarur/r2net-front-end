import { IFilterInputs, ShapeEnum } from "@utils/interfaces";
import { createContext } from "react";

export interface IDiamondsListContext {
  filter: Partial<IFilterInputs>;
  setFilter: (filter: Partial<IFilterInputs>) => void;
  page: number;
  setPage: (page: number) => void;
}

export const DiamondsListContext = createContext<IDiamondsListContext>({
  filter: {
    price: 0,
    shape: ShapeEnum.ALL,
    labDiamond: false,
  },
  setFilter: (filter: Partial<IFilterInputs>) => {},
  page: 1,
  setPage: (page: number) => {},
});

import { IDiamond } from "@utils/interfaces";

export interface IFetchDiamondsResponse {
  fetchDiamonds: IFetchDiamonds;
}

export interface IFetchDiamonds {
  items: IItem[];
  total: number;
}

export interface IItem extends IDiamond{
  _id: string;
}

export interface IFetchDiamondsResponse {
  fetchDiamonds: IFetchDiamonds;
}

export interface IFetchDiamonds {
  items: IItem[];
  total: number;
}

export interface IItem {
  _id: string;
  price: number;
  shape: string;
  color: string;
  clarity: string;
  carat: number;
  cut: string;
  isLabDiamond: boolean;
}

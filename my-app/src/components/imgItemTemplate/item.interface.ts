import { IArrayOptions } from "../../interfaces/app.interface";

export interface IItemArray {
  options: IArrayOptions[];
  handleGetFavorites: (tags: string) => void;
  setCurrentPage: (stateUpdater: (state: number) => number) => void;
}

export interface IArrayQuery {
  id: number;
  previewURL: string;
}

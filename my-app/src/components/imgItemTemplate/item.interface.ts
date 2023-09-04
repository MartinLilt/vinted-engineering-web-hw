import { IArrayOptions } from "../../interfaces/app.interface";

export interface IItemArray {
  searchQuery: string;
  setFavorites: React.Dispatch<React.SetStateAction<IArrayOptions[]>>
}

export interface IArrayQuery {
  id: number;
  previewURL: string;
}

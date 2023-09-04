import { IArrayOptions } from "../../interfaces/app.interface";

export interface IArray {
    searchQuery: string;
    setFavorites: React.Dispatch<React.SetStateAction<IArrayOptions[]>>
  }
  
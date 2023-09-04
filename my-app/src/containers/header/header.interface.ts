import { IArrayOptions } from "../../interfaces/app.interface";

export interface IFavorites {
  favoritesArray: IFavoritesOptions;
  setFavoritesArray: () => void;
}

export interface IFavoritesOptions {
  id: number;
  largeImageURL: string;
  previewURL: string;
  likes: number;
  tags: string;
}

export interface IHeaderOptions {
  setSearchQuery: (query: string) => void;
  favorites: IArrayOptions[];
}
import { FC, useState } from "react";
import { HeaderContainer, MainContainer } from "./containers";
import { IArrayOptions } from "./interfaces/app.interface";

const App: FC = () => {
  const initValue = `${process.env.REACT_APP_INIT_VALUE}`;
  const [searchQuery, setSearchQuery] = useState<string>(initValue);
  const [favorites, setFavorites] = useState<IArrayOptions[]>([]);

  console.log(favorites)

  return (
    <>
      <HeaderContainer setSearchQuery={setSearchQuery} favorites={favorites} />
      <MainContainer searchQuery={searchQuery} setFavorites={setFavorites} />
    </>
  );
};

export default App;

import { FC } from "react";
import s from "./main.module.css";
import { ItemTemplateComponent } from "../../components";
import { IArray } from "./main.interface";

const Main: FC<IArray> = ({ searchQuery, setFavorites }) => {
  return (
    <main className={s.background}>
      <section className="container">
        {searchQuery.length > 1 ? (
          <ItemTemplateComponent
            searchQuery={searchQuery}
            setFavorites={setFavorites}
          />
        ) : (
          <div>Oops!</div>
        )}
      </section>
    </main>
  );
};

export default Main;

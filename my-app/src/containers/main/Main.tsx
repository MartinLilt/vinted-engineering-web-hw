import { FC, useEffect, useState } from "react";
import s from "./main.module.css";
import { ItemTemplateComponent } from "../../components";
import axios from "axios";
import { IArrayOptions } from "../../interfaces/app.interface";

const Main: FC<{
  searchQuery: string;
  setFavorites: React.Dispatch<React.SetStateAction<IArrayOptions[]>>;
}> = ({ searchQuery, setFavorites }) => {
  const [optionsArray, setOptionsArray] = useState<IArrayOptions[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
          params: {
            key: `${process.env.REACT_APP_API_KEY}`,
            q: searchQuery,
            image_type: "photo",
            page: currentPage,
          },
        });

        const options = response.data.hits;

        // Use map to extract only the needed properties
        const newArray = options.map(
          ({ id, largeImageURL, previewURL, likes, tags }: IArrayOptions) => ({
            id,
            largeImageURL,
            previewURL,
            likes,
            tags,
          })
        );

        setOptionsArray(state => [...state, ...newArray]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, currentPage]);

  const handleGetFavorites = (tags: string) => {
    const currentFavoriteObject = optionsArray.find((item) => item.tags === tags);
    if (currentFavoriteObject) {
      setFavorites((prevState) => [...prevState, currentFavoriteObject]);
    }
  };

  return (
    <main className={s.background}>
      <section className="container">
        {searchQuery.length > 1 ? (
          <ItemTemplateComponent
            options={optionsArray}
            handleGetFavorites={handleGetFavorites}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <div>Oops!</div>
        )}
      </section>
    </main>
  );
};

export default Main;
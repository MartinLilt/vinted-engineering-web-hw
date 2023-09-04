import axios from "axios";
import { useEffect, useState } from "react";
import { IArrayOptions } from "../interfaces/app.interface";

function useSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [options, setOptions] = useState<IArrayOptions[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setOptions([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
          params: {
            key: `${process.env.REACT_APP_API_KEY}`,
            q: query,
            image_type: "photo",
            page: pageNumber,
          },
        });

        const { hits } = response.data;
        setOptions((state) => {
          return Array.from(
            new Set([
              ...state,
              ...hits.map(
                ({
                  id,
                  largeImageURL,
                  previewURL,
                  likes,
                  tags,
                }: IArrayOptions) => ({
                  id,
                  largeImageURL,
                  previewURL,
                  likes,
                  tags,
                })
              ),
            ])
          );
        });
        setHasMore(hits.length > 0);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) return;
        setError(true);
      }
    };
    fetchData();
  }, [query, pageNumber]);

  return { loading, error, options, hasMore };
}

export default useSearch;

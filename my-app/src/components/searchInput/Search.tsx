import { FC, useRef, ChangeEvent } from "react";
import s from "./search.module.css";

const Search: FC<{ setSearchQuery: (query: string) => void }> = ({
  setSearchQuery,
}) => {
  const searchInputRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length > 1) {
      setSearchQuery(query);
    }
  };

  return (
    <input
      onChange={handleChange}
      className={s.search}
      type="text"
      placeholder="Use live search.."
      ref={searchInputRef}
      defaultValue={process.env.REACT_APP_INIT_VALUE}
    />
  );
};

export default Search;

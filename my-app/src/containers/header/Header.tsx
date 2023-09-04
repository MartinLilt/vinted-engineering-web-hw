import { FC } from "react";
import s from "./header.module.css";
import logo from "../../assets/svg/github.svg";
import { SearchInputComponent } from "../../components";
import { IHeaderOptions } from "./header.interface";

const Header: FC<IHeaderOptions> = ({ setSearchQuery, favorites }) => {
  return (
    <header className={s.background}>
      <div className="container">
        <ul className={s.list}>
          <li className={s.logo} title="Click to open my github profile.">
            <a
              href="https://github.com/MartinLilt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="GitHub Logo" />
            </a>
          </li>
          <li className={s.search} title="Search your favorites.">
            <SearchInputComponent setSearchQuery={setSearchQuery} />
          </li>
          <li className={s.favourite}>
            <button type="button">
              Favorites<p>{favorites.length}</p>
              <ul className={s["drop-down-list"]}>
                {favorites.map(({ previewURL, tags, likes }, index) => {
                  return (
                    <li key={index}>
                      <img src={previewURL} />
                      <span>
                        <p>Tags: {tags}</p>
                        <p>Likes: {likes}</p>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import { FC, useRef, useState, useCallback } from "react";
import s from "./itemTempl.module.css";
import { IArrayQuery } from "./item.interface";
import useSearch from "../../hooks/useSearch";
import { IArray } from "../../containers/main/main.interface";

const initialState = {
  open: false,
  url: "",
  tags: "",
  likes: 0,
};

const ItemTempl: FC<IArray> = ({ searchQuery, setFavorites }) => {
  const [modal, setModal] = useState(initialState);
  const observer = useRef<IntersectionObserver | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { options, hasMore, loading, error } = useSearch(
    searchQuery,
    currentPage
  );

  const lastElementRef = useCallback((item: HTMLLIElement | null) => {
    if (loading) return
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage((state) => state + 1);
      }
    });
    if (item) observer.current.observe(item);
  }, [loading, hasMore]);

  const openModal = (currentImageId: number) => {
    const selectedImage = options.find(({ id }) => id === currentImageId);
    if (selectedImage) {
      setModal({
        open: true,
        url: selectedImage.largeImageURL || "",
        tags: selectedImage.tags || "",
        likes: selectedImage.likes || 0,
      });
    }
  };

    const handleGetFavorites = (tags: string) => {
    const currentFavoriteObject = options.find((item) => item.tags === tags);
    if (currentFavoriteObject) {
      setFavorites((prevState) => [...prevState, currentFavoriteObject]);
    }
  };

  const closeModal = () => {
    setModal(initialState);
  };

  const handleImageClick = (id: number) => {
    document.body.style.overflow = "hidden";
    openModal(id);
  };

  const handleModalClick = (e: any, tags = "") => {
    if (e.target === e.currentTarget) {
      if (tags.length > 0) handleGetFavorites(tags);
      document.body.style.overflow = "auto";
      closeModal();
    }
  };

  return (
    <>
      {modal.open && modal.url.length > 0 && (
        <div
          className={s.modal}
          onClick={handleModalClick}
          title="Click to close..."
        >
          <span title="">
            <img src={modal.url} alt="Modal Image" draggable="false" />
            <p>Tags: {modal.tags}</p>
            <p>Likes: {modal.likes}</p>
            <button
              type="button"
              className={s.button}
              title="Add to favorite."
              onClick={(e) => handleModalClick(e, modal.tags)}
            >
              Favorite
            </button>
          </span>
        </div>
      )}
      <ul className={s.list}>
        {options.map(({ id, previewURL }: IArrayQuery, index) => {
          if (options.length === index + 1) {
            return (
              <li
                ref={lastElementRef}
                key={id}
                style={{ backgroundImage: `url(${previewURL})` }}
                title="Click to open image."
                onClick={() => handleImageClick(id)}
              />
            );
          } else {
            return (
              <li
                key={id}
                style={{ backgroundImage: `url(${previewURL})` }}
                title="Click to open image."
                onClick={() => handleImageClick(id)}
              />
            );
          }
        })}
      </ul>
      <div className={s.error}>{options.length === 0 && "Nothing found.. 😶 Please, use the search above!"}</div>
      <div className={s.error}>{loading && "Loading..."}</div>
      <div className={s.error}>{error && "There's nothing else.. 🙁"}</div>
    </>
  );
};

export default ItemTempl;

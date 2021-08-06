import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.search}>
      <input className={style.input} type="text" placeholder="Search or jump to..." />
    </div>
  );
};

export default SearchBar;

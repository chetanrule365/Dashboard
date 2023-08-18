import React, { useRef } from "react";
import SearchIcon from "../../assets/Group 7034.svg";
import "./styles.scss";

function SearchBar({ searchUsers }) {
  const ref = useRef();

  return (
    <form
      className="search-filter"
      onSubmit={(e) => {
        e.preventDefault();
        searchUsers(ref.current.value);
      }}
    >
      <input type="text" placeholder="SEARCH" ref={ref} />
      <button className="search-icon-wrap" type="submit">
        <img src={SearchIcon} alt="search" />
      </button>
    </form>
  );
}

export default SearchBar;

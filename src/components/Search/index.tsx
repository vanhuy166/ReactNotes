import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface Irops {
  handleSearch: any;
}

function Search({ handleSearch }: Irops) {
  return (
    <div className="search">
      <span className="icon-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        placeholder="Search for your notes..."
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;

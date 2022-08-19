import React from "react";
import { FormControl, OutlinedInput } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const ImageComponent = ({ search, handleChange }) => {
  return (
    <div className="container">
      <div className="image-container">
        <div className="image-top-container">
          <p className="image-search-top-text"> {"Unsplash Demo"}</p>
          <p className="image-search-sub-top-text">
            The internet’s source of freely-usable images. Powered by creators
            everywhere.
          </p>
        </div>
        <img
          alt={"Demo pic"}
          src={`https://images.unsplash.com/photo-1659846960718-aab68e05fdc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=1600&h=600`}
          width="1536px"
        />
        <div className="image-search">
          <FormControl sx={{ backgroundColor: "white", width: "100%" }}>
            <OutlinedInput
              id="component-outlined"
              placeholder="Search free high-resolution photos"
              value={search}
              onChange={handleChange}
              startAdornment={<SearchIcon position="start" sx={{ mr: 2 }} />}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;

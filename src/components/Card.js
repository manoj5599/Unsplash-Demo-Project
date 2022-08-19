import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { saveAs } from "file-saver";
const Card = ({ url, profilePic, firstName, lastName, downloadUrl }) => {
  return (
    <div className="card-container">
      <div className="top-right-container">
        <div className="button">
          <div className="icon">
            <FavoriteIcon fontSize="small" />
          </div>
        </div>
        <div className="button button-margin">
          <div className="icon">
            <AddIcon fontSize="small" />
          </div>
        </div>
      </div>
      <img src={url} className="image-style" alt="Url" />
      <div className="author">
        <img src={profilePic} className="user" alt="Profile Pic" />
        <div className="button-margin">
          <span className="name">{`${firstName} ${lastName}`}</span>
        </div>
      </div>
      <div className="bottom-right-container">
        <div className="button" onClick={() => saveAs(url, `${firstName}.jpg`)}>
          <div className="icon">
            <ArrowDownwardIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

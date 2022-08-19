import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { saveAs } from "file-saver";

const CardComponent = ({ data, getData, loading, matchDownMd }) => {
  return (
    <div className="card-list">
      <Box sx={{ paddingLeft: "12px", paddingRight: "12px" }}>
        <InfiniteScroll
          dataLength={data.length}
          next={() => getData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <ImageList variant="masonry" cols={matchDownMd ? 1 : 3} gap={24}>
            {!loading
              ? data.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={item.urls.full}
                      srcSet={item.urls.full}
                      alt={item.alt_description}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        paddingRight: "20px",
                      }}
                      title={item.user.first_name}
                      subtitle={item.user.for_hire ? "Available for hire" : ""}
                      position="bottom"
                      actionPosition="right"
                      actionIcon={
                        <IconButton
                          sx={{
                            color: "black",
                            backgroundColor: "gray",
                            borderRadius: 2,

                            paddingLeft: "11px",
                            paddingRight: "11px",
                            "&:hover": {
                              color: "black",
                              backgroundColor: "white",
                            },
                          }}
                          aria-label={`info about ${item.title}`}
                          onClick={() =>
                            saveAs(
                              item.urls.full,
                              `${item.user.first_name}.jpg`
                            )
                          }
                        >
                          <ArrowDownwardIcon fontSize="small" />
                        </IconButton>
                      }
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",

                        padding: "20px",
                      }}
                      position="top"
                      actionPosition="right"
                      actionIcon={
                        <IconButton
                          sx={{
                            color: "black",
                            backgroundColor: "gray",
                            borderRadius: 2,

                            paddingLeft: "11px",
                            paddingRight: "11px",
                            "&:hover": {
                              color: "black",
                              backgroundColor: "white",
                            },
                          }}
                          aria-label={`info about ${item.title}`}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      }
                    />
                    <ImageListItemBar
                      sx={{
                        backgroundColor: "transparent",
                        padding: "20px",
                        mr: "56px",
                      }}
                      position="top"
                      actionPosition="right"
                      actionIcon={
                        <IconButton
                          sx={{
                            color: "black",
                            backgroundColor: "gray",
                            borderRadius: 2,

                            paddingLeft: "11px",
                            paddingRight: "11px",
                            "&:hover": {
                              color: "black",
                              backgroundColor: "white",
                            },
                          }}
                          aria-label={`info about ${item.title}`}
                        >
                          <FavoriteIcon fontSize="small" />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))
              : null}
          </ImageList>
        </InfiniteScroll>
      </Box>
    </div>
  );
};

export default CardComponent;

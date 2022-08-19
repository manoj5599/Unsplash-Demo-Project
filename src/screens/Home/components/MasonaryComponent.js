import React from "react";
import { Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "../../../components/Card";
import CircularProgress from "@mui/material/CircularProgress";

const MasonaryComponent = ({ data, getData, matchDownMd }) => {
  return (
    <div className="card-list">
      <Box sx={{ paddingLeft: "12px", paddingRight: "12px" }}>
        <InfiniteScroll
          dataLength={data.length}
          next={() => getData()}
          hasMore={true}
          loader={() => {
            return (
              <div>
                <CircularProgress />
              </div>
            );
          }}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="24px">
              {data.map((item, i) => (
                <Card
                  key={item}
                  url={item.urls.regular}
                  firstName={item.user.first_name}
                  lastName={item.user.last_name}
                  downloadUrl={item.links.download}
                  profilePic={item.user.profile_image.small}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </Box>
    </div>
  );
};

export default MasonaryComponent;

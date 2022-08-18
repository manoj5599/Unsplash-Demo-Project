import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeTabs from "./components/HomeTabs";
import CardComponent from "./components/CardComponent";
import axios from "axios";
import ImageComponent from "./components/ImageComponent";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  const apiRoot = "https://api.unsplash.com";
  const accessKey = "vuUlIONttzIVr41_BHxAeDqKaRTJyD9B0p5GzjqP9iw";

  const getData = async (count = 16) => {
    await axios
      .get(
        `${apiRoot}/photos?client_id=${accessKey}&page=${currentPage}&per_page=${count}`
      )
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data]);
      });
    setIsLoading(false);
    setCurrentPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    getData();
  }, []);

  const searchData = async () => {
    await axios
      .get(
        `${apiRoot}/search/photos?client_id=${accessKey}&page=1&per_page=16&query=${search}`
      )
      .then((res) => {
        setData(res.data.results);
      });
    setIsLoading(false);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search?.length > 0) {
      searchData();
    }
  }, [search]);
  return (
    <div className="container">
      <Header />
      <HomeTabs />
      {!matchDownMd ? (
        <ImageComponent search={search} handleChange={handleChangeSearch} />
      ) : null}
      <CardComponent
        data={data}
        getData={getData}
        loading={loading}
        matchDownMd={matchDownMd}
      />
    </div>
  );
};

export default Home;

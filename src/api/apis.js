import axios from "axios";
const apiRoot = "https://api.unsplash.com";
const accessKey = "vuUlIONttzIVr41_BHxAeDqKaRTJyD9B0p5GzjqP9iw";

const getData = async (count = 10, currentPage = 1) => {
  let result = await axios.get(
    `${apiRoot}/photos?client_id=${accessKey}&page=${currentPage}&per_page=${count}`
  );
  let data = result.data;
  return data;
};

const apis = { getData };
export default apis;

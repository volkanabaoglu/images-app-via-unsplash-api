import axios from "axios";
import 'dotenv/config'
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization:process.SECRET_KEY,
    },
    params: {
      query: term,
    },
  });
  
  return response.data.results;
};

export default searchImages;

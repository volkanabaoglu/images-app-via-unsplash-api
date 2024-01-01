import axios from "axios";
import "dotenv/config";
import process from 'process'

const secret_key = process.env.SECRET_KEY;
const api_url = process.env.API_URL;
const searchImages = async (term) => {
  const response = await axios.get(api_url, {
    headers: {
      Authorization: secret_key,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

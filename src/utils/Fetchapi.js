import axios from "axios";

const Base_url = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "9fcd1cbf2cmsh41d316878c44115p1a4dbajsn15fbce19a40c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${Base_url}/${url}`, options);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//  Fetch ou Axios
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api";
const URL = "https://spotify-jornada-fullstack.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

// console.log(responseArtist.data);

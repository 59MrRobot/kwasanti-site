import axios from 'axios';

const BASE_URL = "https://victorious-cape-deer.cyclic.app/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     token: `Bearer ${TOKEN}`,
//   },
// });
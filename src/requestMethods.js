import axios from 'axios';

const BASE_URL = "http://localhost:5000/kwasanti/api/";
// const persistRoot = localStorage.getItem("persist:root");
// const user = persistRoot ? JSON.parse(JSON.parse(persistRoot).user).currentUser : null;

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = user ? user.accessToken : "";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI4NWMyYjMwZTAzOTBhOTQxNjk4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTM4ODMzNSwiZXhwIjoxNjc5NjQ3NTM1fQ.cuAH7ajTV90P-60z6pPEamexDMd_ETvRPkeyVzVp1RU";
// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     token: `Bearer ${TOKEN}`,
//   },
// });
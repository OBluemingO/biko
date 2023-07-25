import axios from "axios";

export const Axios = axios.create({
  // baseURL: process.env.API_LOCAL
  baseURL: `http://localhost:5000/api`
})



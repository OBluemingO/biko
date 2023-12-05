import axios from "axios";
import { env } from 'process'

export const Axios = axios.create({
  baseURL: env.NEXT_PUBLIC_API_LOCAL
  // baseURL: `http://localhost:5000/api`
})



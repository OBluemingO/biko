import { Axios } from "@/libs"

export const loginAuth = (data: Record<string, any>) => {
  return Axios.post("/auth/login", data);
};
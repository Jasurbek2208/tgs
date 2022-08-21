import axios from "axios";

export const myAxios = axios.create({
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
  }
});

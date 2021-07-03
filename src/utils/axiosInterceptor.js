import axios from "axios";
export var axiosInstance = axios.create({
  baseURL: "https://maivrikdoc.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
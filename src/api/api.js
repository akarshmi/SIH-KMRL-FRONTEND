// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://lyricalcoder-sih.hf.space/",
  // baseURL: "https://lyricalcoder-sih.hf.space",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

import axios from "axios";

export const baseURL = "http://localhost:8080"

export const $api = axios.create({
  baseURL: "http://localhost:8080",
});


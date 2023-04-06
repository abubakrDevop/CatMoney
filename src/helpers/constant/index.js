import axios from "axios";

export const $api = axios.create({
  baseURL: "https://efd6-80-94-250-80.eu.ngrok.io",
});


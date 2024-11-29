/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const URL = axios.create({
  baseURL: "https://davidwaga.pythonanywhere.com",
});

export const POSTS_URL = "/api/v1/post";

export const POST_REQ_URL = "/api/v1/post";

export default URL;

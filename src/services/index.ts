import axios from "axios";
const fetcher = (url: string) =>
  axios.get(process.env.REACT_APP_API_URL + url).then((res: any) => res.data);
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});
export { fetcher };
export default instance;

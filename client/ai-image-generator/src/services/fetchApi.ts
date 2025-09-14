import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});
console.log("Requesting:", axios.defaults.baseURL + "/your-endpoint");
export const GetPosts = async () => await API.get("api/post/");
export const CreatePost = async (data: any) =>
  await API.post("api/post/", data);
export const GeneratingAIImage = async (data: any) =>
  await API.post("api/generateImage/", data);

import { create } from "apisauce";

const apiClient = create({ baseURL: "http://192.168.43.210:3000/api" });

export default apiClient;

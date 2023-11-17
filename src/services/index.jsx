import axios from "axios";

const baseUrl = "https://budget-api.sreesanth.me";

export const LoginApi = (body) => axios.post(`${baseUrl}/login`, body);

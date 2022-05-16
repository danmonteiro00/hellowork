import axios from "axios";

export const api = axios.create({
  baseURL: "https://hello-work-api.herokuapp.com/",
});

export const createSession = async (email, password) => {
  return api.post('/sessions', { email, password});
}
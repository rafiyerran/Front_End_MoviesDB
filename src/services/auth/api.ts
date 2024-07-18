
import API from "../../../src/services/axiosWithConfig";
import { AuthPayload, AuthResponse } from "./type";

const PostLogin = async (payload: AuthPayload) => {
  try {
    const response = await API.post("https://dummyjson.com/auth/login", payload);
    return response.data as AuthResponse;
  } catch (error) {
    console.error(error);
  }
}

export {PostLogin}
import axios, { AxiosResponse } from "axios";

import { ApiResponse, DataInterface } from "../Interfaces/DataInterface";

const urlAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/users/api/v1/users/",
});

export const getByUser = async (
  email: string,
  cedula: string
): Promise<AxiosResponse<ApiResponse>> => {
  const response = await urlAPI.get<ApiResponse>(
    `search/?cedula=${cedula}&email=${email}`
  );

  console.log(response);

  return response;
};

export const postNewUser = async (usuario: DataInterface) => {
  return await urlAPI.post("/", usuario);
};

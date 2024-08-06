export interface ApiResponse {
  data: DataInterface;
  status: number;
  statusText: string;
  headers: ResponseAPIHeaders;
  config: Config;
  request: Request;
}

export interface DataInterface {
  age: string;
  cedula: string;
  cell_phone_number: string;
  email: string;
  full_name: string;
  gender: string;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Request;
  headers: ConfigHeaders;
  method: string;
  url: string;
}
//
//export interface Request {
//}
//
export interface ConfigHeaders {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing:   boolean;
  forcedJSONParsing:   boolean;
  clarifyTimeoutError: boolean;
}

export interface ResponseAPIHeaders {
  "content-length": string;
  "content-type": string;
}

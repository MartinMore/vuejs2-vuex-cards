/* eslint-disable */
import axios from 'axios';

export const http = axios.create({
  baseURL: `http://papaya-rest.local.vh/`,
  headers: {
    Authorization: 'Basic V2ViX0NpbmVwYXBheWE6UHJvZF9vbXp0NDZiandCMnNpbHRrODRKRQ=='
  }
});
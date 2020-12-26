/*
 * MODULE NAME: REQUEST_SERIVCE
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (16 MAY 2020)
 *
 * PURPOSE: THIS IS AXIOS DOCUMENT WHICH HELPS TO HANDLE THE APPLICATION'S AJAX REQUESTS
 *
 */
import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;

const url = (manifest.packagerOpts.hostType === `lan`) && manifest.packagerOpts.dev
  ? "http://".concat(manifest.debuggerHost.split(`:`).shift().concat(`:3000`))
  : `http://10:13:31:32`.concat(`:3000`);
// require module

export const service = axios.create({
  baseURL: url,
  //baseURL: "http://localhost:3000", //process.env.VUE_APP_BACKEND,
  timeout: 30000
});

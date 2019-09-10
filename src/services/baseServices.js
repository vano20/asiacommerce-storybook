import axios from "axios";

class BaseServices {
  constructor() {
    this.endPoint = "";
    this.useApi = "api2";
    this.config = {
      api1: "https://api1.asiacommerce.net/",
      api2: "https://api2dev.asiacommerce.net/"
    };
    this.setBaseUrl();
  }

  setBaseUrl() {
    this.http = axios.create({
      baseURL: this.config[this.useApi]
    });
  }

  includeDefault(options) {
    let accessToken = "";
    if (this.useApi === "api2") accessToken = window.localStorage.getItem("access_token");
    else accessToken = window.localStorage.getItem("ali_1_access_token");
    this.setBaseUrl();
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    };
    return Object.assign(defaultOptions, options);
  }

  get(options = {}) {
    const opts = this.includeDefault(options);
    return this.http.get(this.endPoint, opts);
  }

  getONe(id, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.get(`${this.endPoint}/${id}`, opts);
  }

  post(data, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.post(this.endPoint, data, opts);
  }

  postOne(id, data, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.post(`${this.endPoint}/${id}`, data, opts);
  }

  put(data, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.put(this.endPoint, data, opts);
  }

  putOne(id, data, options = {}) {
    const opts = this.includeDefault(options);
    return this.http.put(`${this.endPoint}/${id}`, data, opts);
  }
}

export default BaseServices;

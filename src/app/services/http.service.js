import axios from "axios";
import config from "../config.json";

// Сделал универсальный http сервис для того чтобы для удобства получения данных

axios.defaults.baseURL = config.apiEndpoint;

const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};

export default httpService;

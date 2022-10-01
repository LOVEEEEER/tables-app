import httpService from "./http.service";
const tableEndpoint = "table/";

// Сделал tableService чтобы все операции были в одном месте и было проще взаимодействовать

const tableService = {
  fetchAll: async () => {
    const content = await httpService.get(tableEndpoint);
    return content;
  },
  delete: async (id) => {
    const content = await httpService.delete(tableEndpoint + id);
    return content;
  },
  post: async (entry) => {
    const content = await httpService.post(tableEndpoint, entry);
    return content;
  },
};

export default tableService;

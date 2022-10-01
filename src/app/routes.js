import Entry from "./layouts/Entry";
import AddEntry from "./layouts/AddEntry";

// Предпочитаю выносить роуты в один файл, потому что с таким подходом проще реализовывать более сложную логику

const routes = [
  { path: "/", exact: true, component: Entry },
  { path: "/add", component: AddEntry },
];

export default routes;

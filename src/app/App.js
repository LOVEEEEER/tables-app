import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getRoutes = () => {
  // Получаем роуты с заранее подготовленного объекта в app/routes.js
  return routes.map((prop, key) => {
    return (
      <Route
        key={key}
        exact={prop.exact}
        path={prop.path}
        component={prop.component}
      />
    );
  });
};

function App() {
  return (
    <>
      <Switch>
        {getRoutes()}
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;

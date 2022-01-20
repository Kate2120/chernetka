import { Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Path } from "./constants/path/path";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
     
      <Routes>
      <Route path={Path.LOGIN} element={<LoginPage />}/>
      <Route path={Path.HOME} element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

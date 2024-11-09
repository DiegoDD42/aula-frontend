import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./login";

const Main = () => (
    <Routes>
        <Route exact path="/home" Component={Home}/>
        <Route exact path="/login" Component={Login}/>
    </Routes>
)

export default Main;
import LoginPage from "../../Pages/LoginPage/LoginPage";
import {PrivateRoute} from "./PrivateRoute";
import Header from "../Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Path} from "../../constants/path/path";
import Home from "../../Pages/Home/Home";
import UserInfo from "../../Pages/UserInfo/UserInfo";
import React from "react";
import {useSelector} from "react-redux";
import {getIsLogged} from "../../Redux/selectors";

function AllRoutes() {
    let auth = useSelector(getIsLogged);
    return (
        <div>
            {auth === 'true' ? <Header/> : ''}
        <Routes>
        <Route path={Path.LOGIN} element={auth === 'false' ? <LoginPage/> : <Navigate to={Path.HOME}/>}/>
    <Route path={Path.HOME} element={<PrivateRoute>
    <Home/>
    </PrivateRoute>}/>
    <Route path={Path.USER_INFO} element={<PrivateRoute><UserInfo/></PrivateRoute>}/>
    <Route path={Path.USER_INFO_EMPTY} element={<PrivateRoute><UserInfo/></PrivateRoute>}/>
    <Route path='*' element={auth === 'true' ? <Navigate to={Path.HOME}/> : <Navigate to={Path.LOGIN}/>}/>
    </Routes>
    </div>
);
}
export default AllRoutes;
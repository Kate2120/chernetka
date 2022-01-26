import {Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {Path} from "./constants/path/path";
import Home from "./Pages/Home/Home";
import UserInfo from "./Pages/UserInfo/UserInfo";
import {useSelector} from "react-redux";
import {getAuth} from "./Redux/selectors";
import Header from "./components/Header/Header";
import React from "react";


function App() {
    let user = useSelector(getAuth);
    let isLogged: boolean;
    if (user === null) {
        isLogged = false;
    } else {
        isLogged = true;
    }

    return (
        <div>
            {isLogged ? <Header/> : ''}
            <Routes>
                <Route path={Path.LOGIN} element={(!isLogged) ? <LoginPage/> : <Navigate to={Path.HOME}/>}/>
                <Route path={Path.HOME} element={isLogged ? <Home/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path={Path.USER_INFO} element={isLogged ? <UserInfo/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path={Path.USER_INFO_EMPTY} element={isLogged ? <UserInfo/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path='*' element={<LoginPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

import {Route, Routes, Navigate} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {Path} from "./constants/path/path";
import Home from "./Pages/Home/Home";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getIsLogged} from "./Redux/selectors";


function App() {
    /*let [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('is_logged')));
    setIsLogged(useSelector(getIsLogged));*/
/*let isLogged= Boolean(localStorage.getItem('is_logged'));
useEffect(() => {

    }, [isLogged]);
console.log(isLogged);*/

/*let isLogged;
    useEffect(() => {*/
       let isLogged = useSelector(getIsLogged);
/*    }, [isLogged]);*/
    console.log(isLogged);
    return (
        <div>
            {isLogged ? <Header/> : ''}
            <Routes>
                <Route path={Path.LOGIN} element={isLogged ? <Navigate to={Path.HOME}/> : <LoginPage/>}/>
                <Route path={Path.HOME} element={isLogged ? <Home/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path={Path.USER_INFO} element={isLogged ? <UserInfo/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path={Path.USER_INFO_EMPTY} element={isLogged ? <UserInfo/> : <Navigate to={Path.LOGIN}/>}/>
                <Route path='*' element={<LoginPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

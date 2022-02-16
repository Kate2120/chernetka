import {Navigate} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {useSelector} from "react-redux";
import {getIsLogged} from "../../Redux/usersReducer/selectors";

const PrivateRoute = ({children}: any) => {
    let auth = useSelector(getIsLogged);
    if (auth === 'true') {
        return children;
    }
    return <Navigate to={Path.LOGIN}/>
}

export {PrivateRoute};
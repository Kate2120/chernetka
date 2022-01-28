import {fetchUsersFail} from "./actions";
import {dataError} from "./interfacies";
import {useDispatch} from "react-redux";

function ErrorHandler (error: dataError){
    const dispatch = useDispatch();
    if (error.status != null) {
        if(error.title != null) {
            if (error.status === 404) {
                dispatch(fetchUsersFail(error));
                    return;
                }
            else if (error.status === 403) {
                    dispatch(fetchUsersFail(error));
                    return;
                }
            }
        }
    };

export default ErrorHandler;
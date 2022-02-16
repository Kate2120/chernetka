import {fetchUsersFail} from "./actions";
import {dataError} from "./interfacies";
import {useDispatch} from "react-redux";

function ErrorHandler (error: dataError){
    const dispatch = useDispatch();
    if (error.status != null && error.title != null) {
            switch (error.status){
                case 404:
                dispatch(fetchUsersFail(error));
                    return;
                case 403:
                    dispatch(fetchUsersFail(error));
                    return;
            }
        }
    }

export default ErrorHandler;
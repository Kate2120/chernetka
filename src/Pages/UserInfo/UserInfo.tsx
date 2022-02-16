import UserCard from "../../components/Users/UserCard";
import styles from "./UserInfo.module.scss";
import {useParams} from "react-router-dom";
import Stub from "../../components/Stub/Stub";
import Breadcrumbs from "../../components/Breadcrambs/Breadcrumbs";
import {Path} from "../../constants/path/path";

function UserInfo() {
    let {id} = useParams();
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {id ? <Breadcrumbs home={Path.HOME} category={Path.USER_INFO_EMPTY} id={id}
                                   categoryName={"user_info"}/> :
                    <Breadcrumbs home={Path.HOME} category={Path.USER_INFO_EMPTY} categoryName={"user_info"}/>}
                {id ? <UserCard/> : <Stub/>}
            </div>
        </div>
    );
}

export default UserInfo;

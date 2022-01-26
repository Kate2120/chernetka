
import Header from "../../components/Header/Header";
import UserCard from "../../components/Users/UserCard";
import styles from "./UserInfo.module.scss";
import {useParams} from "react-router-dom";
import Stub from "../../components/Stub/Stub";

function UserInfo() {

   let id = useParams();

  return (
    <div className={styles.body}>

        {id.id ? <UserCard/> : <Stub/>}

    </div>
  );
}

export default UserInfo;

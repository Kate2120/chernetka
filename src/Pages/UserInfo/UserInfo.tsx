
import Header from "../../components/Header/Header";
import UserCard from "../../components/Users/UserCard";
import styles from "./UserInfo.module.scss";
function UserInfo() {
   
  return (
    <div className={styles.body}>
      <Header />
      <UserCard/>
    </div>
  );
}

export default UserInfo;

import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import styles from "./Home.module.scss";
import {useSelector} from "react-redux";
import {getAuth} from "../../Redux/selectors";

function Home() {
    let user = useSelector(getAuth);
    console.log(user)
    console.log(localStorage)
  return (
    <div className={styles.body}>
          <Users/>
    </div>
  );
}
export default Home;

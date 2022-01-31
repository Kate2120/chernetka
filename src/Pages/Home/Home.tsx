import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import styles from "./Home.module.scss";
import {useSelector} from "react-redux";
import {getAuth} from "../../Redux/selectors";

function Home() {

  return (
    <div className={styles.body}>
          <Users/>
    </div>
  );
}
export default Home;

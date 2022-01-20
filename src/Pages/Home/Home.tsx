import Header from "../../components/Header/Header";
import Users from "../../components/Users/Users";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <Users/>
    </div>
  );
}
export default Home;

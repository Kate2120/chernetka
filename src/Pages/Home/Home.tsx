import Users from "../../components/Users/Users";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.body}>
            <Users/>
        </div>
    );
}

export default Home;

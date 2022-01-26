import {changeLanguage} from "i18next";
import styles from "./Menu.module.scss";
import {propsLang} from './interfacies';
function Language(props: propsLang){
    return(
    <div onClick={() => changeLanguage(props.lang)} className={styles.lang}>
        <img src={props.image}/>
    </div>
    )
}
export default Language;
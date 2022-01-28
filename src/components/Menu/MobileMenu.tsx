import styles from './Menu.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {useTranslation} from "react-i18next";
import i18next, {changeLanguage} from "i18next";
import {fetchLogout} from "../../Redux/Actions/actions";
import {useDispatch} from "react-redux";
interface PropsMobileMenu{
    menuActive: boolean;
    setMenuActive: Function
}
export default function MobileMenu(props: PropsMobileMenu){
    const dispatch = useDispatch();
    const {t} = useTranslation();
    let location = useLocation();
    let handlerLogout = () => {
        dispatch(fetchLogout());
    }
    return(
        <div className={props.menuActive ? styles.mobile : styles.mobileInactive} onClick={() => props.setMenuActive(false)}>
            <ul>
                <li>
                    <Link to={Path.HOME} className={location.pathname === Path.HOME ? styles.activeItem : styles.linkMenu}>{t("users")}</Link>
                </li>
                <li>
                    <Link to={Path.USER_INFO_EMPTY}
                          className={location.pathname.includes('user')? styles.activeItem : styles.linkMenu} onClick={() => {}}>{t("user_info")}</Link>
                </li>
            </ul>
            <p>{t("choose_lang")}</p>
            <ul>
                <li onClick={() => changeLanguage("ru")} className={i18next.language === 'ru' ? styles.active : styles.lang} id='ru'>{t("russian")}</li>
                <li onClick={() => changeLanguage("en")} className={i18next.language === 'en' ? styles.active : styles.lang} id='en'>{t("english")}</li>
            </ul>
            <p onClick={handlerLogout}><Link to={Path.LOGIN}>{t("logout")}</Link></p>
        </div>
    )
}
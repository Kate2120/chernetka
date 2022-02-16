import styles from './Menu.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Path} from "../../constants/path/path";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {handleLogoutChangeLanguage} from "./hendlers";
import {useDispatch} from "react-redux";
import {fetchLogout} from "../../Redux/usersReducer/actions";
import {PropsMobileMenu} from "./interfacies";

export default function MobileMenu(props: PropsMobileMenu){
    const {t} = useTranslation();
    let location = useLocation();
    const dispatch = useDispatch();
    function HandlerLogout () {
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
                          className={location.pathname.includes('user')? styles.activeItem : styles.linkMenu} >{t("user_info")}</Link>
                </li>
            </ul>
            <p>{t("choose_lang")}</p>
            <ul>
                <li onClick={handleLogoutChangeLanguage} className={i18next.language === 'ru' ? styles.active : styles.lang} id='ru'>{t("russian")}</li>
                <li onClick={handleLogoutChangeLanguage} className={i18next.language === 'en' ? styles.active : styles.lang} id='en'>{t("english")}</li>
            </ul>
            <p onClick={HandlerLogout}><Link to={Path.LOGIN}>{t("logout")}</Link></p>
        </div>
    )
}
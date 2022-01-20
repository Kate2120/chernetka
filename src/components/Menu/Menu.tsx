import styles from "./Menu.module.scss";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <ul>
          <li>{t("users")}</li>
          <li>{t("user_info")}</li>
        </ul>
      </div>
    </div>
  );
}

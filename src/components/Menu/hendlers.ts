import React from "react";
import {changeLanguage} from "i18next";

export function handleLogoutChangeLanguage(event: React.MouseEvent<HTMLElement>) {
    changeLanguage(`${(event.target as HTMLElement).id}`)
}


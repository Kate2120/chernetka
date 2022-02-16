import styles from "./UserList.module.scss";
import {Link, useLocation} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import {User} from "../../Api/interfacies";

function UsersList() {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage['users']) : [];
    let [picture, setPicture] = useState('');
    let url = useLocation();

    function showPicture(event: React.MouseEvent<HTMLElement>) {
        setPicture((event.target as HTMLElement).id);
    }

    function hidePicture(event: React.MouseEvent<HTMLElement>) {
        setPicture('');
    }

    return (
        <div className={styles.info}>
            <div className={styles.items} id='buttonList'>
                {users.map((user: User, index: string) => (
                    <div className={styles.item} id={user.picture.large} onMouseOver={showPicture}
                         onMouseOut={hidePicture}>
                        <Link to={`${url.pathname}/${index}`} onMouseOver={showPicture} id={user.picture.large}>
                            <div className={styles.photoPreview} onMouseOver={showPicture} id={user.picture.large}><img
                                src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}
                                title={`${user.name.first} ${user.name.last}`}/></div>
                            <div onMouseOver={showPicture}
                                 id={user.picture.large}>{`${user.name.first} ${user.name.last}`}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.photo}>
                <img src={picture}/>
            </div>
        </div>
    )
}

export default UsersList;
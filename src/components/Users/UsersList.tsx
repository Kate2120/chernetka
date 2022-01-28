import styles from "./UserList.module.scss";
import {Link, useLocation} from "react-router-dom";
import * as React from "react";
import {useSelector} from "react-redux";
import {getUsers} from "../../Redux/selectors";
import {useState} from "react";

function UsersList() {
    let users = useSelector(getUsers);
    let [picture, setPicture] = useState('');
    let url = useLocation();
    return (
        <div className={styles.info}>
            <div className={styles.items} id='buttonList'>
                {users.map((user, index) => (
                    <div className={styles.item} id={String(index)} onMouseOver={() => setPicture(user.picture.large)}
                         onMouseOut={() => setPicture('')}>
                        <Link to={`${url.pathname}/${index}`}>
                            <div className={styles.photoPreview}><img src={user.picture.thumbnail}/></div>
                            <div>{user.name.first + ' ' + user.name.last}</div>
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
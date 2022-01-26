import styles from './Stub.module.scss';
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuth, getUsers} from "../../Redux/selectors";
import {useEffect, useState} from "react";
import {fetchUsersRequest} from "../../Redux/Actions/actions";
import UsersList from "../UsersList/UsersList";

function Stub() {
    let [buttonText, setButtonText] = useState('Выбрать')
    let [viewItems, setViewItems] = useState(false)
    const dispatch = useDispatch();
    let auth = useSelector(getAuth);
    console.log(auth);

    let users = useSelector(getUsers);
    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsersRequest());
        }

    }, [dispatch]);

    let changeView = () => {

        if (viewItems) {
            setViewItems(viewItems = false)
        } else {
            setViewItems(viewItems = true)
        }
        if(buttonText === 'Выбрать'){
            setButtonText(buttonText = 'Свернуть')
        }else {
            setButtonText(buttonText = 'Выбрать')
        }
    }

    return (
        <div className={styles.container}>
            <h2>Подробная информация о пользователе</h2>
            <div className={styles.info}>
                <div className={styles.list}>
                    <h3>Выберите пользователя</h3>
                    <div className={styles.rowChoose}>
                        <div className={styles.choose}>Сделайте выбор</div>
                        <div className={styles.button} onClick={() => changeView()}>{buttonText}</div>
                    </div>
                    {viewItems ? <UsersList/> : ''}
                </div>


            </div>
        </div>
    )
}

let items = document.querySelector('.Stub_item__U9LBI');
console.log(items)
export default Stub;
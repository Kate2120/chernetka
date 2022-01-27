import styles from './Stub.module.scss';
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getAuth, getUsers} from "../../Redux/selectors";
import {useEffect, useState} from "react";
import {fetchAllUsersRequest} from "../../Redux/Actions/actions";
import UsersList from "../Users/UsersList";

function Stub() {
    let [buttonText, setButtonText] = useState('Выбрать')
    let [viewItems, setViewItems] = useState(false)


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

export default Stub;
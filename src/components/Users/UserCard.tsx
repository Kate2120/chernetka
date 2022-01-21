import styles from './Users.module.scss';
import {User, Picture} from '../../Redux/Actions/interfacies';
interface Props{
    image: Picture,
}
export default function UserCard(props: Props){
    return (
        <div className={styles.card}>
        <div className={styles.picture}><img src={props.image.large}/></div>
        </div>
    )
}
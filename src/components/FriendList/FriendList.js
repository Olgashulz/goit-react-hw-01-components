import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList (props) {
    const { friends }= props;
    
    return (<ul className={styles.list}>
     {friends.map((item) => (
        <li className={styles.item} key={ item.id }>
        <span className={item.isOnline ? styles.online : styles.ofline}>{item.isOnline}</span>
        <img className={styles.avatar} src={item.avatar} alt={item.name} width="48" />
        <p className={styles.name}>{item.name}</p>
      </li>
     
    ))}
</ul>)
}


FriendList.propTypes = {
    friends: PropTypes.array.isRequired,  
  }
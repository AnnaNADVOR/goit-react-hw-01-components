import PropTypes from 'prop-types';
import FriendItem from "./FriendItem"
import css from './Frendlist.module.css';

export default function FriendsList({ friends }) {
    return (
        <ul className={css.list}> 
            {friends.map(friend => (<FriendItem
                key={friend.id}
                isOnline={friend.isOnline}
                name={friend.name}
                avatar={friend.avatar}
            />))}
        </ul>
    )
}


FriendsList.propTypes = { 
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}



import PropTypes from 'prop-types';
import css from './Frendlist.module.css';
import baseCss from '../../idex.module.css';

function getStatusStyle (status) {
    return status ? css.status : `${css.status} ${css.online}`;
}

export default function FriendItem({ id, avatar, name, isOnline }) {
    return (
        <li className={css.card} key={id}>
            <span className={getStatusStyle(isOnline)}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={baseCss.main_text}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = { 
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
}

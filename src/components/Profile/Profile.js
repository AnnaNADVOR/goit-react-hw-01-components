import  PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile(props) {
    const { username, tag, location, avatar, stats } = props;
    return (
        <div className={css.profile}>
            <div className={css.user_info}>
                <img  className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={css.user_name}>{username}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.main_text}>Followers</span>
                    <span className={css.text}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.main_text}>Views</span>
                    <span className={css.text}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.main_text}>Likes</span>
                    <span className={css.text}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = { 
    username: PropTypes.string, 
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}

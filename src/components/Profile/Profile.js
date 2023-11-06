import PropTypes from 'prop-types';
import baseCss from '../../idex.module.css';
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
                <p className={baseCss.text}>@{tag}</p>
                <p className={baseCss.text}>{location}</p>
            </div>
            <ul className={`${ css.list } ${ baseCss.list }`}>
                <li className={baseCss.item}>
                    <span className={css.main_text}>Followers</span>
                    <span className={baseCss.text}>{stats.followers}</span>
                </li>
                <li className={baseCss.item}>
                    <span className={css.main_text}>Views</span>
                    <span className={baseCss.text}>{stats.views}</span>
                </li>
                <li className={baseCss.item}>
                    <span className={css.main_text}>Likes</span>
                    <span className={baseCss.text}>{stats.likes}</span>
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

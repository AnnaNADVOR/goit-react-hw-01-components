export default function FriendItem({id, avatar, name, isOnline}) {
    return (
        <li key={id}>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    )
}
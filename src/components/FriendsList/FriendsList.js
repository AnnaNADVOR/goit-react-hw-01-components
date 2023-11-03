import FriendItem  from "./FriendItem"
export default function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map(friend => (<FriendItem
                key={friend.id}
                status={friend.isOnline}
                name={friend.name}
                avatar={friend.avatar} />))}
        </ul>
    )
}


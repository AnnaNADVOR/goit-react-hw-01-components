import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import Profile from './Profile/Profile';
import StatisticList from './Statistics/StatisticList';
import FriendsList from './FriendsList/FriendsList';

const App = () => {
  return (
    <div>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
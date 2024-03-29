import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import transactios from './TransactionHistory/transactions.json'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactios} />
    </div>
  );
};

export default App;
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

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
      <Statistics stats={data} />
    </div>
  );
};

export default App;
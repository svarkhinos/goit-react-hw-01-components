import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';

import { Statistics } from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      Homework-1
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

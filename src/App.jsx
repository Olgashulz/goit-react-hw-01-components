import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import Profile from './components/Profile';
import Section from './components/Section/Section';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
return <div className="container">
  <Profile
  userImg = { user.avatar }
  userName = { user.name }
  userTag = { user.tag }
  userlocation = { user.location } 
  userStats = { user.stats }
  />
  <Section 
  title="Upload stats" 
  stats={ statisticalData }
  />
  <FriendList 
  friends={ friends }
  />
  <TransactionHistory 
  transactions = { transactions }
  />
</div>    
}


import user from "./social-profile/user.json";
import statisticalData from './statistics/statistical-data.json';
import Profile from "./components/Profile";
import Section from "./components/Section";
// import Statiatics from "./components/Statistics";

export default function App() {
    return <div className="container">
        <Profile
  userImg = {user.avatar}
  userName = {user.name}
  userTag = {user.tag}
  userlocation = {user.location} 
  userStats = {user.stats}
  />
  <Section title="Upload stats" stats={statisticalData}/>
  {/* <Statiatics /> */}
    </div>    
}


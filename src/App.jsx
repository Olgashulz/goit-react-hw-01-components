import user from "./social-profile/user.json";
import Profile from "./components/Profile";
import Statiatics from "./components/Statistics";

export default function App() {
    return <div>
        <Profile
  userImg = {user.avatar}
  userName = {user.name}
  userTag = {user.tag}
  userlocation = {user.location} 
  userStats = {user.stats}
  />,
  <Statiatics />
    </div>
    
}


import PropTypes from 'prop-types';
import defaultImage from '../social-profile/defoultImage.png';

export default function Profile (props) {
    const {userImg = defaultImage, userName, userTag, userlocation, userStats} = props;
    //console.log(props)
    return(
    <div>
    <div>
      <img
        src={userImg}
        alt="Аватар пользователя"
      />
      <p>{userName}</p>
      <p>@{userTag}</p>
      <p>{userlocation}</p>
    </div>
      <ul>
       <li>
         <span >Followers</span>
         <span >{userStats.followers}</span>
       </li>
       <li>
         <span >Views</span>
         <span >{userStats.views}</span>
       </li>
       <li>
        <span >Likes</span>
        <span >{userStats.likes}</span>
       </li>
      </ul>
  </div>
  );
  }

  Profile.propTypes = {
    userImg: PropTypes.string,  
    userName: PropTypes.string,
    userTag: PropTypes.string,
    userlocation: PropTypes.string,
    userStats: PropTypes.object
  }
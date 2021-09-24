import PropTypes from 'prop-types';
import './Profile.css';
import defaultImage from '../../social-profile/defoultImage.png';

export default function Profile (props) {
    const {userImg = defaultImage, userName, userTag, userlocation, userStats} = props;
    //console.log(props)
    return(
    <div className="profile">
    <div className="description">
      <img
        src={userImg}
        alt="Аватар пользователя"
        className="avatar"
      />
      <p className="name">{userName}</p>
      <p className="tag">@{userTag}</p>
      <p className="location">{userlocation}</p>
    </div>
      <ul className="stats">
       <li className="stats-item">
         <span className="label">Followers</span>
         <span className="quantity">{userStats.followers}</span>
       </li>
       <li className="stats-item">
         <span className="label">Views</span>
         <span className="quantity">{userStats.views}</span>
       </li>
       <li className="stats-item">
        <span className="label">Likes</span>
        <span className="quantity">{userStats.likes}</span>
       </li>
      </ul>
  </div>
  );
  }

  Profile.propTypes = {
    userImg: PropTypes.string.isRequired,  
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userlocation: PropTypes.string.isRequired,
    userStats: PropTypes.object.isRequired
  }
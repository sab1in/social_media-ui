import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

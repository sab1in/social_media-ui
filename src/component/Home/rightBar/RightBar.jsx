import "./rightbar.css";
import { Users } from "../../../dummyData";
import Online from "../../common/online/Online";

export default function Rightbar() {
  return (
    <>
      <div className="rightbar sticky top-12 z-10 pt-4">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </>
  );
}

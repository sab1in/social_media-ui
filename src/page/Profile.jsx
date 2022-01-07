import Feed from "../component/common/feed/Feed";
import Share from "../component/common/share/Share";
import Post from "../component/common/posts/posts";
import "./profile.css";
import RightBar from "../component/Profile/rightBar/RightBar";

const Profile = () => {
  return (
    <div className="profile mt-12">
      <div className="profileRight">
        <div className="profileRightTop w-9/12 mx-auto">
          <div className="profileCover">
            <img
              className="profileCoverImg rounded-b-lg"
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt=""
            />
            <img
              className="profileUserImg"
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt=""
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak Kocaoglu</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom w-9/12 gap-4 mx-auto mt-4">
          <div className="w-1/3">
            <RightBar />
          </div>

          <div className="w-2/3 mx-auto">
            <div className="w-9/12">
              <Share />
            </div>
            <div className="w-9/12 mt-3">
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

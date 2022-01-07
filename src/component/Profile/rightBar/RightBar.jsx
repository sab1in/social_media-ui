import "./rightBar.css";

const RightBar = () => {
  return (
    <div>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings gap-2">
        {[1, 2, 3, 4, 5, 6].map((friend, index) => {
          return (
            <div key={index} className="rightbarFollowing">
              <img
                src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;

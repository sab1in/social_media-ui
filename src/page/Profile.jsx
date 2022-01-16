import Share from "../component/common/share/Share";
import Post from "../component/common/posts/posts";
import "./profile.css";
import RightBar from "../component/Profile/rightBar/RightBar";
import { useState, useEffect } from "react";

const Profile = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const resizeFunction = () => {
    setWidthSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("tigger");
    window.addEventListener("resize", resizeFunction);
    console.log(widthSize);
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  });

  return (
    <div className="profile mt-12">
      <div className="profileRight">
        <div className="profileRightTop w-full lg:w-9/12 mx-auto">
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
        <div className="flex flex-col md:flex-row md:w-11/12 lg:w-9/12 xl:w-8/12 gap-4 mx-2 sm:mx-10 md:mx-auto mt-5">
          <div className="w-full sm:w-7/12 md:w-5/12 ">
            <RightBar />
          </div>

          <div className="w-full sm:w-8/12 md:w-7/12">
            <div className="mb-2">
              <Share />
            </div>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

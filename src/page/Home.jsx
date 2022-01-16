import Sidebar from "../component/Home/sidebar/Sidebar";
import Feed from "../component/common/feed/Feed";
import Rightbar from "../component/Home/rightBar/RightBar";
import { useEffect, useState } from "react";

const Home = () => {
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
    <div>
      <div className="flex gap-4 mt-12 mx-auto justify-between">
        {widthSize > 1024 && (
          <div className="w-3/12 xl:w-2/12">
            <Sidebar />
          </div>
        )}
        <div className="w-full md:w-8/12 lg:w-6/12 ">
          <Feed />
        </div>
        {widthSize > 767 && (
          <div className="w-4/12">
            <Rightbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

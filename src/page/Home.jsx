import Sidebar from "../component/Home/sidebar/Sidebar";
import Feed from "../component/common/feed/Feed";
import Rightbar from "../component/Home/rightBar/RightBar";

const Home = () => {
  return (
    <div>
      <div className="flex gap-4 mt-12 justify-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;

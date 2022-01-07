import Share from "../share/Share";
import "./feed.css";
import Post from "../posts/posts";

export default function Feed() {
  return (
    <div className="w-3/5">
      <div className="p-5">
        <div className="w-8/12 mx-auto">
          <Share />
        </div>

        <div className="flex flex-col gap-4 mt-6 w-8/12 mx-auto items-center">
          {[1, 2, 3, 4].map((post, index) => {
            return <Post key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

import Share from "../share/Share";
import "./feed.css";
import Post from "../posts/posts";

export default function Feed() {
  return (
    <div className="w-full sm:w-9/12 md:w-full xl:w-10/12 mx-auto">
      <div className="p-1 sm:p-5">
        <div className="">
          <Share />
        </div>

        <div className="flex flex-col gap-4 mt-6 items-center">
          {[1, 2, 3, 4].map((post, index) => {
            return <Post key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

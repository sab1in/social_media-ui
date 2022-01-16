import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
            alt=""
          />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption items-start lg:items-center flex-col lg:flex-row">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              {window.innerWidth > 500 && (
                <span className="shareOptionText">Photo/Video</span>
              )}
            </div>
            <div className="shareOption flex-col lg:flex-row">
              <Label htmlColor="blue" className="shareIcon" />
              {window.innerWidth > 500 && (
                <span className="shareOptionText">Tag</span>
              )}
            </div>
            <div className="shareOption flex-col lg:flex-row">
              <Room htmlColor="green" className="shareIcon" />
              {window.innerWidth > 500 && (
                <span className="shareOptionText">Location</span>
              )}
            </div>
            <div className="shareOption flex-col lg:flex-row">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              {window.innerWidth > 500 && (
                <span className="shareOptionText">Feelings</span>
              )}
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;

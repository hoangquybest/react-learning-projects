import React from "react";
import { YoutubeData } from "../../data";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
        />
      ))}
    </div>
  );
};

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is the default title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is the default author"}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default YoutubeList;

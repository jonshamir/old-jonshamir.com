import React from "react";

import "./VideoEmbed.scss";

const VideoEmbed = (props) => {
  return (
    <div className="VideoEmbed">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${props.videoId}?`}
        title="YouTube video player"
        frameBorder="0"
        allow="modestbranding; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;

// Does not need to keep track of state!
// Will use YT embed to play videos
// Need title, description, url (PROPS)
import React from 'react';

const VideoDetail = ({ video }) => {
  // if no video provided:
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

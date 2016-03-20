import React, { Component } from 'react'

const VideoDetail = ({ video }) => {

  if(!video) {
    return(
      <div>Loading...</div>
    );
  }
  // console.log(video);
  const Vid = video.id.videoId;
  const url = `https://www.youtube.com/embed/${Vid}`;

  return(
    <div className="video-detail">
      <iframe src={url}></iframe>
      <p>{ video.snippet.title }</p>
      <p>{ video.snippet.description }</p>
    </div>
  );

}

export default VideoDetail;

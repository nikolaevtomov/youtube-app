import React, { Component } from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {

  if(!video) {
    return(
      <div>Loading...</div>
    );
  }

  const title = video.snippet.title;
  const image = video.snippet.thumbnails.default.url;

  return(
    <li onClick={ () => onVideoSelect(video) } className="video-item">
      <img src={ image } />
      <p>{ title }</p>
    </li>
  );

}

export default VideoListItem;

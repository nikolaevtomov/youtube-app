import React, { Component } from 'react'

import VideoListItem from './videolist_item'

const VideoList = (props) => {

  const videoItem = props.videos.map( (video) => {
    return(
      <VideoListItem
        key={ video.etag }
        video={ video }
        onVideoSelect={ props.onVideoSelect } />
    );
  });

  return (
    <div className="youtube-list">
      <p>Video List</p>
      <ul>
        { videoItem }
      </ul>
    </div>
  );

}

export default VideoList;

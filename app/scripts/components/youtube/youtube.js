import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './searchbar'
import VideoList from './videolist'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyD0Gg8J29wuUJvFlQdrq3D_EQR-ww97r_M';

export default class extends Component {

  constructor(props) {
    super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSeach('surfboards');

  }

  videoSeach(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce( (term) => { this.videoSeach(term) }, 300)

    return(
      <div className="youtube">
        <p>Youtube Search</p>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ (selectedVideo) => {this.setState({selectedVideo}).bind(this)} }
          videos={ this.state.videos } />
      </div>
    );
  }

}

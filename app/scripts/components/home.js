import React, { Component } from 'react'
// import { render } from 'react-dom'

import Youtube from './youtube/youtube'

export default class extends Component {

  render() {
    return(
      <main className="hero-unit home">
        {/*<h3>Simple Youtube App</h3>*/}
        <Youtube />
      </main>
    )
  }

}

import React, { Component } from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import Header from './header'
import Footer from './footer'

export default class extends Component {

  render() {
    return(
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }

}

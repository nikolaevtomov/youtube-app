import React, { Component } from 'react'

export default class extends Component {

  constructor(props) {
    super(props);

      this.state = { term: '' };

  }

  render() {
    return(
      <div>
        <input onChange={ e => this.onInputChange(e.target.value) } />
        <p>Value of input: { this.state.term }</p>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

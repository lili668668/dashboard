import React, { Component } from 'react'
import WordCloud from 'react-d3-cloud'

class App extends Component {
  render () {
    const { words } = this.props
    return (
      <WordCloud
        data={words}
        height={300}
        width={400}
      />
    );
  }
}

export default App

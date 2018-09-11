import React, { Component } from 'react'
import Circle from 'react-circle'

class App extends Component {
  render () {
    const { impression } = this.props
    return (
      <Circle
        animate={true}
        animationDuration="3s"
        responsive={true}
        lineWidth={50}
        progress={impression}
        bgColor="whitesmoke"
        roundedStroke={true}
        showPercentageSymbol={true}
      />
    );
  }
}

export default App

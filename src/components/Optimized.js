import React, { Component } from 'react'
import LiquidFillGauge from 'react-liquid-gauge'

class App extends Component {
  render () {
    const { optimized } = this.props
    return (
      <LiquidFillGauge
        width={250}
        height={250}
        value={optimized}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
      />
    );
  }
}

export default App

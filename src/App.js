import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import randomCharts from './utils/random_charts'
import randomWords from './utils/random_words'
import { axises } from './utils/constants'
import WordCloud from './components/WordCloud'
import Charts from './components/Charts'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      leftAxis: 'cpc',
      rightAxis: 'cost',
      charts: randomCharts(),
      words: randomWords()
    }
  }

  handleChartRandom () {
    this.setState((state, props) => ({ ...state, charts: randomCharts() }))
  }

  handleWordsRandom () {
    this.setState((state, props) => ({ ...state, words: randomWords() }))
  }

  handleAxisChange (axisId, value) {
    this.setState((state, props) => ({ ...state, [axisId]: value }))
  }

  render () {
    const { leftAxis, rightAxis, charts, words } = this.state
    return (
      <div className="pool">
        <Card className="card-half">
          <AppBar className="cloud" position="static">
            <Toolbar>
              <h1>Word Cloud</h1>
              <IconButton onClick={() => this.handleWordsRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <WordCloud words={words} />
        </Card>
        <Card className="card-full">
          <AppBar className="charts" position="static">
            <Toolbar>
              <h1>Charts</h1>
              <IconButton onClick={() => this.handleChartRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="menuBar">
            <AppBar className="menuOne" position="static">
              <Toolbar>
                <Select
                  onChange={(event) => this.handleAxisChange('leftAxis', event.target.value)}
                  className="selector"
                  value={leftAxis}
                  inputProps={{ name: 'leftAxis', id: 'leftAxis'}}
                >
                {axises.map(axis => (
                  <MenuItem key={axis.value} value={axis.value}>{axis.label}</MenuItem>
                ))}
                </Select>
              </Toolbar>
            </AppBar>
            <AppBar className="menuTwo" position="static">
              <Toolbar>
                <Select
                  onChange={(event) => this.handleAxisChange('rightAxis', event.target.value)}
                  className="selector"
                  value={rightAxis}
                  inputProps={{ name: 'rightAxis', id: 'rightAxis'}}
                >
                {axises.map(axis => (
                  <MenuItem key={axis.value} value={axis.value}>{axis.label}</MenuItem>
                ))}
                </Select>
              </Toolbar>
            </AppBar>
          </div>
          <Charts leftAxis={leftAxis} rightAxis={rightAxis} charts={charts} />
        </Card>
      </div>
    );
  }
}

export default App

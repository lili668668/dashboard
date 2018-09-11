import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import random from './utils/random'
import randomCharts from './utils/random_charts'
import randomWords from './utils/random_words'
import randomPopulation from './utils/random_population'
import faker from 'faker'
import randomTendency from './utils/random_tendency'
import { axises } from './utils/constants'
import Tendency from './components/Tendency'
import Impression from './components/Impression'
import Optimized from './components/Optimized'
import WordCloud from './components/WordCloud'
import Population from './components/Population'
import PopulationGroup from './components/PopulationGroup'
import Charts from './components/Charts'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: faker.lorem.slug(),
      active: faker.random.boolean(),
      leftAxis: 'cpc',
      rightAxis: 'cost',
      charts: randomCharts(),
      words: randomWords(),
      population: randomPopulation(),
      tendency: randomTendency(),
      impression: Math.round(random(50, 100)),
      optimized: Math.round(random(50, 100))
    }
  }

  handleInfoRandom () {
    this.setState((state, props) => ({ ...state, name: faker.lorem.slug(), active: faker.random.boolean() }))
  }

  handleChartRandom () {
    this.setState((state, props) => ({ ...state, charts: randomCharts() }))
  }

  handleWordsRandom () {
    this.setState((state, props) => ({ ...state, words: randomWords() }))
  }

  handlePopulationRandom () {
    this.setState((state, props) => ({ ...state, population: randomPopulation() }))
  }

  handleTendencyRandom () {
    this.setState((state, props) => ({ ...state, tendency: randomTendency() }))
  }

  handleImpressionRandom () {
    this.setState((state, props) => ({ ...state, impression: Math.round(random(50, 100)) }))
  }

  handleOptimizedRandom () {
    this.setState((state, props) => ({ ...state, optimized: Math.round(random(50, 100)) }))
  }

  handleAxisChange (axisId, value) {
    this.setState((state, props) => ({ ...state, [axisId]: value }))
  }

  render () {
    const { name, active, leftAxis, rightAxis, charts, words, population, tendency, impression, optimized } = this.state
    return (
      <div className="pool">
        <Card className="card card-quarter">
          <AppBar className="info appBar" position="static">
            <Toolbar>
              <h1>Information</h1>
              <IconButton onClick={() => this.handleInfoRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Optimized Action Type" secondary="link_click: Link Clicks" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Status" secondary={active ? "Active" : "Pause"} />
            </ListItem>
          </List>
        </Card>
        <Card className="card card-quarter">
          <AppBar className="tendency appBar" position="static">
            <Toolbar>
              <h1>Delivery Tendency</h1>
              <IconButton onClick={() => this.handleTendencyRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Tendency tendency={tendency} />
        </Card>
        <Card className="card card-quarter">
          <AppBar className="impression-rate appBar" position="static">
            <Toolbar>
              <h1>Impression Rate</h1>
              <IconButton onClick={() => this.handleImpressionRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="card-content">
            <div className="circle-container">
              <Impression impression={impression} />
            </div>
          </div>
        </Card>
        <Card className="card card-quarter">
          <AppBar className="optimized appBar" position="static">
            <Toolbar>
              <h1>Optimize Effectiveness</h1>
              <IconButton onClick={() => this.handleOptimizedRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="card-content">
            <div className="circle-container">
              <Optimized optimized={optimized} />
            </div>
          </div>
        </Card>
        <Card className="card card-quarter">
          <AppBar className="population-group appBar" position="static">
            <Toolbar>
              <h1>Population Group</h1>
              <IconButton onClick={() => this.handlePopulationRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <PopulationGroup population={population} />
        </Card>
        <Card className="card card-half">
          <AppBar className="population appBar" position="static">
            <Toolbar>
              <h1>Population</h1>
              <IconButton onClick={() => this.handlePopulationRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Population population={population} />
        </Card>
        <Card className="card card-quarter">
          <AppBar className="cloud appBar" position="static">
            <Toolbar>
              <h1>Word Cloud</h1>
              <IconButton onClick={() => this.handleWordsRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <WordCloud words={words} />
        </Card>
        <Card className="card card-full">
          <AppBar className="charts appBar" position="static">
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

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
      axis: 'cpc',
      charts: randomCharts(),
      words: randomWords(),
      nowPopulation: randomPopulation(),
      futurePopulation: randomPopulation(),
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
    this.setState((state, props) => ({ ...state, nowPopulation: randomPopulation(), futurePopulation: randomPopulation() }))
  }

  handleOptimizedRandom () {
    this.setState((state, props) => ({ ...state, optimized: Math.round(random(50, 100)) }))
  }

  handleAxisChange (value) {
    this.setState((state, props) => ({ ...state, axis: value }))
  }

  render () {
    const { name, active, axis, charts, words, nowPopulation, futurePopulation, optimized } = this.state
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
        <Card className="card card-half">
          <AppBar className="population-group appBar" position="static">
            <Toolbar>
              <h1>Population Campare Pie</h1>
              <IconButton onClick={() => this.handlePopulationRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <PopulationGroup nowPopulation={nowPopulation} futurePopulation={futurePopulation} />
        </Card>
        <Card className="card card-half">
          <AppBar className="cloud appBar" position="static">
            <Toolbar>
              <h1>Suggest Word</h1>
              <IconButton onClick={() => this.handleWordsRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <WordCloud words={words} />
        </Card>
        <Card className="card card-half">
          <AppBar className="population appBar" position="static">
            <Toolbar>
              <h1>Population Campare Bar</h1>
              <IconButton onClick={() => this.handlePopulationRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Population nowPopulation={nowPopulation} futurePopulation={futurePopulation} />
        </Card>
        <Card className="card card-full">
          <AppBar className="charts appBar" position="static">
            <Toolbar>
              <h1>Insight</h1>
              <IconButton onClick={() => this.handleChartRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="menuBar">
            <AppBar className="menuOne" position="static">
              <Toolbar>
                <Select
                  onChange={(event) => this.handleAxisChange(event.target.value)}
                  className="selector"
                  value={axis}
                  inputProps={{ name: 'axis', id: 'axis'}}
                >
                {axises.map(axis => (
                  <MenuItem key={axis.value} value={axis.value}>{axis.label}</MenuItem>
                ))}
                </Select>
              </Toolbar>
            </AppBar>
          </div>
          <Charts axis={axis} charts={charts} />
        </Card>
      </div>
    );
  }
}

export default App

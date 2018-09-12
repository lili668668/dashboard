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
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import random from './utils/random'
import randomCharts from './utils/random_charts'
import randomWords from './utils/random_words'
import randomPopulation from './utils/random_population'
import randomList from './utils/random_list'
import { columns, extensions } from './utils/constants'
import faker from 'faker'
import { axises } from './utils/constants'
import Optimized from './components/Optimized'
import WordCloud from './components/WordCloud'
import Population from './components/Population'
import PopulationGroup from './components/PopulationGroup'
import Charts from './components/Charts'
import './App.css'

const processList = (list) => {
  let cnt = 1
  const tmp = list
    .map((entry) => {
      const newEntry = Object.keys(entry)
        .map(key => {
          if (Array.isArray(entry[key])) return ({ [key]: entry[key].join(', ') })
          return entry
        })
        .reduce((collection, entry) => Object.assign({}, collection, entry), {})
      newEntry.id = `${cnt}`
      cnt++
      return newEntry
    })
  console.log(tmp)
  return tmp
}

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
      impression: Math.round(random(50, 100)),
      optimized: Math.round(random(50, 100)),
      list: randomList()
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

  handleListRandom () {
    this.setState((state, props) => ({ ...state, list: randomList() }))
  }

  handleAxisChange (value) {
    this.setState((state, props) => ({ ...state, axis: value }))
  }

  render () {
    const { name, active, axis, charts, words, nowPopulation, futurePopulation, optimized, list } = this.state
    const proccessedList = processList(list)
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
          <AppBar className="list appBar" position="static">
            <Toolbar>
              <h1>Suggest Bar</h1>
              <IconButton onClick={() => this.handleListRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <ResponsiveContainer height={300} width="100%">
            <BarChart data={proccessedList} margin={{ left: 50, right: 50, top: 30, bottom: 30 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="id" />
              <Tooltip content={(object) => {
                const entry = proccessedList.find(({ id }) => id === object.label)
                if (!entry) return null
                return (
                  <div style={{ width: 400, overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                  {
                    Object.keys(entry).map(key => (<div style={{ color: '#F44336' }} key={key}>{`${key}: ${entry[key]}`}</div>))
                  }
                  </div>
                )
              }} />
              <Legend />
              <Bar dataKey="score" fill="#C8E6C9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="card card-half">
          <AppBar className="list appBar" position="static">
            <Toolbar>
              <h1>Suggest List</h1>
              <IconButton onClick={() => this.handleListRandom()}>
                <RefreshIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid
            rows={proccessedList}
            columns={columns}
          >
            <SortingState
              defaultSorting={[{ columnName: 'score', direction: 'desc' }]}
            />
            <IntegratedSorting />
            <Table
              columnExtensions={extensions}
            />
            <TableHeaderRow />
          </Grid>
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

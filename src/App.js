import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import randomCharts from './utils/random_charts'
import { axises } from './utils/constants'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      leftAxis: 'cpc',
      rightAxis: 'cost',
      charts: randomCharts()
    }
  }

  handleChartRandom () {
    this.setState((state, props) => ({ ...state, charts: randomCharts() }))
  }

  handleAxisChange (axisId, value) {
    this.setState((state, props) => ({ ...state, [axisId]: value }))
  }

  render () {
    const { leftAxis, rightAxis, charts } = this.state
    return (
      <div className="pool">
        <Card className="card">
          <AppBar className="appBar" position="static">
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
          <ResponsiveContainer height={300} width={700}>
            <LineChart data={charts} margin={{ left: 50, right: 50, top: 30, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId={leftAxis} orientation="left" label={{ value: axises.find(axis => axis.value === leftAxis).label, position: 'left', offset: -10 }} />
              <YAxis yAxisId={rightAxis} orientation="right" label={{ value: axises.find(axis => axis.value === rightAxis).label, position: 'right', offset: -10 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" yAxisId={leftAxis} dataKey={leftAxis} stroke="#FFA726" fill="#FFB74D" />
              <Line type="monotone" yAxisId={rightAxis} dataKey={rightAxis} stroke="#2196F3" fill="#42A5F5" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    );
  }
}

export default App

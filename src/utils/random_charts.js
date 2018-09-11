import random from './random'

function random_charts () {
  const data = []
  for (let cnt = 0; cnt < 24; cnt++) {
    const now_cpc = random(0.1, 5.0)
    const now_cpm = random(0.1, 5.0)
    const now_cost = random(100, 1000)
    const future_cpc = random(0.1, 5.0)
    const future_cpm = random(0.1, 5.0)
    const future_cost = random(100, 1000)
    const entry = { hour: cnt, now_cpc , now_cpm , now_cost, future_cpc , future_cpm , future_cost }
    data.push(entry)
  }
  return data
}

export default random_charts

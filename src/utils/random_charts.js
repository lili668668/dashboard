import random from './random'

function random_charts () {
  const data = []
  for (let cnt = 0; cnt < 24; cnt++) {
    const cpc = random(0.1, 5.0);
    const cpm = random(0.1, 5.0);
    const cost = random(100, 1000);
    const entry = { hour: cnt, cpc , cpm , cost }
    data.push(entry)
  }
  return data
}

export default random_charts

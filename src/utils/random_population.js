import random from './random'

function random_population () {
  const data = []
  for (let cnt = 0; cnt < 10; cnt++) {
    const male = Math.round(random(0, 1150000))
    const female = Math.round(random(0, 1150000))
    const entry = { age: `${(cnt * 10) + 1} ~ ${(cnt + 1) * 10} old`,male, female }
    data.push(entry)
  }
  return data
}

export default random_population

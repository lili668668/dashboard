function random (min, max) {
  const number = Math.random() * max + min
  return Math.round(number * 100) / 100
}

export default random

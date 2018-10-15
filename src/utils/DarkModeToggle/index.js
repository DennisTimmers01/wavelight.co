const DARK = 'dark'
const MAIN = 'main'

const currentTime = new Date().getHours()

const checkIfDay = () => {
  if (currentTime > 6 && currentTime < 21) return MAIN
  return DARK
}

export default checkIfDay

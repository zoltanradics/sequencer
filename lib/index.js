
module.exports = (min, max, step = 1, cb = ()=>{}) => {
  return Array(max * step)
    .fill(1)
    .reduce((acc, n, i) => {
      const y = n * (i+1) * step
      return y >= min && y <= max ? [...acc, y] : acc
    }, [])
}

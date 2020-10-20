module.exports = (min, max, step = 1, cr) => {
  return Array(max)
    .fill(1)
    .reduce((acc, n, i) => {
      const y = n * (i + 1) * step
      return y >= min && y <= max ? [...acc, cr ? cr(y, i) : y] : acc
    }, [])
}

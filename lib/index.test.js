const sequencer = require('./index')

test('Sequencer single invocation without creator', () => {
  const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sequence = sequencer(0, 10, 1)
  expect(sequence).toEqual(ref)
})

test('Sequencer single invocation with creator', () => {
  const ref = [
    { index: 0, number: 1 },
    { index: 1, number: 2 },
    { index: 2, number: 3 },
  ]
  const sequence = sequencer(0, 3, 1, (value, index) => ({
    index,
    number: value,
  }))
  expect(sequence).toEqual(ref)
})

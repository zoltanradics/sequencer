const sequencer = require('./index');

test('TEST Sequencer', () => {
  const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sequence = sequencer(0, 10, 1)
  expect(sequence).toEqual(ref);
});
import { mergeSort } from './mergeSort';

test('Merge sort is done properly for given array', () => {
  const result = mergeSort([10, 1, 30, 29], (a, b) => {
    return a > b ? 1 : -1;
  });
  expect(result).toEqual([1, 10, 29, 30]);
});

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export type CompareFn<T> = (a: T, b: T) => 1 | 0 | -1;

function merge<Type>(
  leftSubArr: Type[],
  rightSubArr: Type[],
  compareFn: CompareFn<Type>,
): Type[] {
  const result: Type[] = [];

  while (leftSubArr.length > 0 && rightSubArr.length > 0) {
    if (compareFn(leftSubArr[0], rightSubArr[0]) <= 0) {
      result.push(leftSubArr.shift()!);
    } else {
      result.push(rightSubArr.shift()!);
    }
  }

  while (leftSubArr.length > 0) {
    result.push(leftSubArr.shift()!);
  }
  while (rightSubArr.length > 0) {
    result.push(rightSubArr.shift()!);
  }
  return result;
}

export function mergeSort<ValueType>(
  array: ValueType[],
  compareFn: CompareFn<ValueType>,
): ValueType[] {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle), compareFn);
  const right = mergeSort(array.slice(middle), compareFn);

  return merge<ValueType>(left, right, compareFn);
}

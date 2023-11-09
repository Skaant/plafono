export function getTotal(arr: number[]) {
  return arr.reduce((acc, item) => acc + item, 0);
}

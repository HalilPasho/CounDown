export function unique(arr: any[]) {
  return arr.filter((element, index) => index === arr.indexOf(element));
}

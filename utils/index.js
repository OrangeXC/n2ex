export function sortByDate (arr) {
  return arr.sort(function (a, b) {
    return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
  })
}

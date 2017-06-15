function format (timestamp) {
  let date = new Date(timestamp * 1000)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())

  return Y + M + D + h + m + s
}

export {
  format
}

import Vue from 'vue'

export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)

  if (parts[0] === 'www') parts.shift()

  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)

  if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时前')
  } else {
    return pluralize(~~(between / 86400), ' 天前')
  }
}

export function format (timestamp) {
  let date = new Date(timestamp * 1000)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())

  return Y + M + D
}

export function image (url) {
  if (url === '/static/img/node_normal.png') {
    return '../img/node_normal.png'
  } else {
    return url
  }
}

function pluralize (time, label) {
  return time + label
}

const filters = {
  host,
  timeAgo,
  format,
  image
}

export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

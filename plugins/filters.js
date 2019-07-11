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
    return `${~~(between / 60)} 分钟前`
  } else if (between < 86400) {
    return `${~~(between / 3600)} 小时前`
  } else {
    return `${~~(between / 86400)} 天前`
  }
}

export function format (timestamp) {
  const date = new Date(timestamp * 1000)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1) + '-'
  const D = (date.getDate() < 10
    ? '0' + (date.getDate())
    : date.getDate())

  return Y + M + D
}

export function image (url) {
  if (url.indexOf('/static/img/') === -1) return url

  return `https://www.v2ex.com${url}`
}

export function largeAvatar (url) {
  if (url.indexOf('avatar') > -1 && url.indexOf('mini') > -1) {
    return url.replace('mini', 'large')
  }

  if (url.indexOf('gravatar') > -1 && url.indexOf('s=24') > -1) {
    return url.replace('s=24', 's=60')
  }

  return url
}

const filters = {
  host,
  timeAgo,
  format,
  image,
  largeAvatar
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters

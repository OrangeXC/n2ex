import {
  host,
  timeAgo,
  format,
  image,
  largeAvatar
} from '@/plugins/filters.js'

describe('filters', () => {
  const RealDate = Date

  const mockDate = (timestamp) => {
    global.Date = class extends RealDate {
      static now () {
        return timestamp
      }
    }
  }

  test('export functions', () => {
    expect(host).toEqual(expect.any(Function))
    expect(timeAgo).toEqual(expect.any(Function))
    expect(format).toEqual(expect.any(Function))
    expect(image).toEqual(expect.any(Function))
  })

  test('host', () => {
    expect(host('https://www.baidu.com')).toBe('baidu.com')
    expect(host('http://i.baidu.com')).toBe('i.baidu.com')
    expect(host('www.baidu.com')).toBe('baidu.com')
  })

  test('timeAgo', () => {
    mockDate(1529051100000)

    expect(timeAgo(1529050000)).toBe('18 分钟前')
    expect(timeAgo(1529046000)).toBe('1 小时前')
    expect(timeAgo(1528346000)).toBe('8 天前')
  })

  test('format', () => {
    expect(format(1514764800)).toBe('2018-01-01')
    expect(format(1544572800)).toBe('2018-12-12')
  })

  test('image', () => {
    expect(image('/static/img/node_mini.png')).toBe('https://www.v2ex.com/static/img/node_mini.png')
    expect(image('test.png')).toBe('test.png')
  })

  test('largeAvatar', () => {
    expect(largeAvatar('https://cdn.v2ex.com/avatar/mini.png')).toBe('https://cdn.v2ex.com/avatar/large.png')
    expect(largeAvatar('https://cdn.v2ex.com/gravatar?s=24')).toBe('https://cdn.v2ex.com/gravatar?s=60')
    expect(largeAvatar('https://cdn.v2ex.com/avatar.png')).toBe('https://cdn.v2ex.com/avatar.png')
  })

  afterEach(() => {
    global.Date = RealDate
  })
})

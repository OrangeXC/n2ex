import test from 'ava'
import sinon from 'sinon'
import {
  host,
  timeAgo,
  format,
  image
} from '../plugins/filters'

test('export functions', t => {
  t.is(typeof(host), 'function')
  t.is(typeof(timeAgo), 'function')
  t.is(typeof(format), 'function')
  t.is(typeof(image), 'function')
})

test('host', t => {
  t.is(host('https://www.baidu.com'), 'baidu.com')
  t.is(host('http://i.baidu.com'), 'i.baidu.com')
  t.is(host('www.baidu.com'), 'baidu.com')
})

test('timeAgo', t => {
  sinon.replace(Date, 'now', () => 1529051100000)

  t.is(timeAgo(1529050000), '18 分钟前')
  t.is(timeAgo(1529046000), '1 小时前')
  t.is(timeAgo(1528346000), '8 天前')

  sinon.restore()
})

test('format', t => {
  t.is(format(1514764800), '2018-01-01')
  t.is(format(1544572800), '2018-12-12')
})

test('image', t => {
  t.is(image('/static/img/node_mini.png'), 'https://www.v2ex.com/static/img/node_mini.png')
  t.is(image('test.png'), 'test.png')
})

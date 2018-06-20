import test from 'ava'
import sinon from 'sinon'
import {
  sortByDate,
  fetchTopicList
} from '../../utils/index'

test('sortByDate', t => {
  const topicList = [{
    created: 1,
    list: ['test1']
  }, {
    created: 3,
    list: ['test3']
  }, {
    created: 3,
    list: ['test3']
  }, {
    created: 2,
    list: ['test2']
  }]

  const sortList = sortByDate(topicList)

  t.deepEqual(sortList, [{
    created: 3,
    list: ['test3']
  }, {
    created: 3,
    list: ['test3']
  }, {
    created: 2,
    list: ['test2']
  }, {
    created: 1,
    list: ['test1']
  }])
})

test('fetchTopicList', async t => {
  const axios = {
    get: sinon.fake.resolves({ data: ['test'] })
  }

  const list = await fetchTopicList(axios, 'a', 'b')

  t.deepEqual(list, ['test', 'test'])
})

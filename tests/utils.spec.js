import {
  sortByDate,
  fetchTopicList
} from '@/utils/index.js'

describe('utils', () => {
  test('sortByDate', () => {
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

    expect(sortByDate(topicList)).toEqual([{
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

  test('fetchTopicList', async () => {
    const axios = {
      get: jest.fn()
    }

    axios.get.mockResolvedValue({ data: ['test'] })

    const list = await fetchTopicList(axios, ['a', 'b'])

    expect(list).toEqual(['test', 'test'])
  })
})

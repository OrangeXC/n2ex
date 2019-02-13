import Vue from 'vue'
import { mount } from '@vue/test-utils'
import TopicList from '@/components/TopicList.vue'
import { timeAgo, largeAvatar } from '@/plugins/filters'
import mocks from '../__mocks__'

describe('component: TopicList', () => {
  const { topicList } = mocks

  beforeAll(() => {
    Vue.config.ignoredElements = [
      'nuxt-link',
      'mu-card',
      'mu-card-header',
      'mu-card-actions',
      'mu-avatar',
      'mu-chip',
      'mu-icon'
    ]
  })

  test('template', () => {
    const wrapper = mount(TopicList, {
      propsData: { topicList },
      filters: { largeAvatar }
    })

    expect(wrapper.findAll('mu-card').length).toBe(mocks.topicList.length)

    mocks.topicList.forEach((item, index) => {
      const nuxtLink = wrapper.findAll('nuxt-link').at(index)

      expect(nuxtLink.attributes().to).toBe(`/m/topic/${item.id}`)

      const muCardHeader = nuxtLink.find('mu-card-header')

      expect(muCardHeader.attributes().title).toBe(item.title)

      const chips = wrapper.findAll('.chip-container').at(index).findAll('mu-chip')
      const nodeChip = chips.at(0)
      const commentChip = chips.at(1)

      expect(nodeChip.find('img').attributes().src).toBe(item.node.avatar_normal)
      expect(nodeChip.text()).toBe(item.node.title)
      expect(commentChip.find('mu-icon').attributes().value).toBe('comment')
      expect(commentChip.text()).toBe(item.replies)
    })
  })

  test('methods: toNode', () => {
    const $router = {
      push: () => {}
    }

    jest.spyOn($router, 'push')

    const wrapper = mount(TopicList, {
      propsData: { topicList },
      mocks: { $router },
      filters: { largeAvatar }
    })

    mocks.topicList.forEach((item, index) => {
      const nodeChip = wrapper.findAll('mu-card').at(index).find('mu-chip')

      nodeChip.trigger('click')

      expect($router.push).toHaveBeenCalledWith(`/m/node/${item.node.name}`)
    })
  })

  test('methods: getSubTitle', () => {
    const wrapper = mount(TopicList, {
      propsData: { topicList },
      filters: { largeAvatar }
    })

    mocks.topicList.forEach(item => {
      expect(wrapper.vm.getSubTitle(item)).toBe(`by ${item.member.username} • ${timeAgo(item.created)}`)
    })
  })
})

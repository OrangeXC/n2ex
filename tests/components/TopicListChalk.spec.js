import { mount } from '@vue/test-utils'
import Vue from 'vue'
import TopicListChalk from '@/components/TopicListChalk'
import { largeAvatar } from '@/plugins/filters'
import mocks from '../__mocks__'

describe('component: TopicListChalk', () => {
  const { topicList } = mocks

  beforeAll(() => {
    Vue.config.ignoredElements = [
      'el-card',
      'el-button',
      'el-badge',
      'mu-avatar'
    ]
    Vue.filter('timeAgo', () => 'timeAgo')
    Vue.filter('image', () => 'image')
  })

  test('template', () => {
    const wrapper = mount(TopicListChalk, {
      propsData: { topicList },
      filters: { largeAvatar }
    })

    expect(wrapper.findAll('el-card').length).toBe(topicList.length)

    topicList.forEach((item, index) => {
      const cardTitle = wrapper.findAll('.clearfix').at(index).find('.link')

      expect(cardTitle.text()).toBe(item.title)

      const avatar = wrapper.findAll('.avatar').at(index).find('img')

      expect(avatar.attributes().src).toBe(item.member.avatar_large)

      const cardContent = wrapper.findAll('.card-content').at(index)

      expect(cardContent.text().includes('• timeAgo')).toBeTruthy()
      expect(cardContent.text().includes('• 最后访问 timeAgo')).toBeTruthy()
      expect(cardContent.find('.link').text()).toBe(item.member.username)

      const nodeAvatar = wrapper.findAll('mu-avatar').at(index).find('img')

      expect(nodeAvatar.attributes().src).toBe('image')

      const badge = wrapper.findAll('el-badge').at(index)

      expect(badge.attributes().value).toBe(item.replies)
    })
  })

  test('methods: toTopic', () => {
    const $router = {
      push: () => {}
    }
    jest.spyOn($router, 'push')

    const wrapper = mount(TopicListChalk, {
      propsData: { topicList },
      mocks: {
        $router
      },
      filters: { largeAvatar }
    })

    topicList.forEach((item, index) => {
      const toTopicTitle = wrapper.findAll('.clearfix').at(index).find('.link')
      const toTopicButton = wrapper.findAll('.card-action').at(index).findAll('el-button').at(1)

      toTopicTitle.trigger('click')
      toTopicButton.trigger('click')

      expect($router.push).toHaveBeenCalledWith(`/topic/${item.id}`)
    })

    expect($router.push).toHaveBeenCalledTimes(4)
  })

  test('methods: toNode', () => {
    const $router = {
      push: () => {}
    }
    jest.spyOn($router, 'push')

    const wrapper = mount(TopicListChalk, {
      propsData: { topicList },
      mocks: {
        $router
      },
      filters: { largeAvatar }
    })

    topicList.forEach((item, index) => {
      const toNodeButton = wrapper.findAll('.card-action').at(index).findAll('el-button').at(0)

      toNodeButton.trigger('click')

      expect($router.push).toHaveBeenCalledWith(`/node/${item.node.name}`)
    })
  })

  test('methods: toMember', () => {
    const $router = {
      push: () => {}
    }
    jest.spyOn($router, 'push')

    const wrapper = mount(TopicListChalk, {
      propsData: { topicList },
      mocks: {
        $router
      },
      filters: { largeAvatar }
    })

    topicList.forEach((item, index) => {
      const toMemberText = wrapper.findAll('.card-content').at(index).find('.link')

      toMemberText.trigger('click')

      expect($router.push).toHaveBeenCalledWith(`/member/${item.member.username}`)
    })
  })
})

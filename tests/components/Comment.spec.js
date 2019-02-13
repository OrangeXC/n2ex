import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Comment from '@/components/Comment.vue'
import { largeAvatar } from '@/plugins/filters'
import mocks from '../__mocks__'

describe('component: Comment', () => {
  const { comments } = mocks

  beforeAll(() => {
    Vue.config.ignoredElements = [
      'mu-card',
      'mu-list',
      'mu-list-item',
      'mu-list-item-title',
      'mu-list-item-content',
      'mu-list-item-action',
      'mu-sub-header',
      'mu-avatar',
      'mu-divider'
    ]
  })

  test('template', () => {
    const wrapper = mount(Comment, {
      propsData: { comments },
      filters: { largeAvatar }
    })

    expect(wrapper.findAll('mu-list-item').length).toBe(comments.length)

    comments.forEach((item, index) => {
      const muAvatar = wrapper.findAll('mu-avatar').at(index)
      const imgSrc = muAvatar.find('img').attributes().src

      expect(imgSrc).toBe(item.member.avatar_normal)

      const muListItemTitle = wrapper.findAll('mu-list-item-title').at(index)

      expect(muListItemTitle.text()).toBe(item.member.username)

      const content = wrapper.findAll('.article').at(index)

      expect(content.html()).toBe(`<div class="article">${item.content_rendered}</div>`)
    })
  })

  test('methods: toMember', () => {
    const $router = {
      push: () => {}
    }

    jest.spyOn($router, 'push')

    const wrapper = mount(Comment, {
      propsData: { comments },
      mocks: {
        $router
      },
      filters: { largeAvatar }
    })

    comments.forEach((item, index) => {
      const muAvatar = wrapper.findAll('mu-avatar').at(index)

      muAvatar.trigger('click')

      expect($router.push).toHaveBeenCalledWith(`/member/${item.member.username}`)
    })
  })
})

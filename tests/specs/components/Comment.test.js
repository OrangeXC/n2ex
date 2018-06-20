import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import sinon from 'sinon'
import Vue from 'vue'
import Comment from '../../../components/Comment'
import mocks from '../__mocks__'

test.before(t => {
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

  t.context.comments = mocks.comments
})

test('template', t => {
  const { comments } = t.context
  const wrapper = shallowMount(Comment, {
    propsData: { comments }
  })

  t.is(wrapper.findAll('mu-list-item').length, comments.length)

  comments.forEach((item, index) => {
    const muAvatar = wrapper.findAll('mu-avatar').at(index)
    const imgSrc = muAvatar.find('img').attributes().src

    t.is(imgSrc, item.member.avatar_normal)

    const muListItemTitle = wrapper.findAll('mu-list-item-title').at(index)

    t.is(muListItemTitle.text(), item.member.username)

    const content = wrapper.findAll('.article').at(index)

    t.is(content.html(), `<div class="article">${item.content_rendered}</div>`)
  })
})

test('methods: toMember', t => {
  const { comments } = t.context
  const $router = {
    push: () => {}
  }
  const spy = sinon.spy($router, 'push')

  const wrapper = shallowMount(Comment, {
    propsData: { comments },
    mocks: {
      $router
    }
  })

  comments.forEach((item, index) => {
    const muAvatar = wrapper.findAll('mu-avatar').at(index)

    muAvatar.trigger('click')

    t.true(spy.withArgs(`/member/${item.member.username}`).calledOnce)
  })
})

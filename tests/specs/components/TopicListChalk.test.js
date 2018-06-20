import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import sinon from 'sinon'
import Vue from 'vue'
import TopicListChalk from '../../../components/TopicListChalk'
import mocks from '../__mocks__'

test.before(t => {
  Vue.config.ignoredElements = [
    'el-card',
    'el-button',
    'el-badge',
    'mu-avatar'
  ]
  Vue.filter('timeAgo', () => 'timeAgo')
  Vue.filter('image', () => 'image')

  t.context.topicList = mocks.topicList
})

test('template', t => {
  const { topicList } = t.context
  const wrapper = shallowMount(TopicListChalk, {
    propsData: { topicList }
  })

  t.is(wrapper.findAll('el-card').length, topicList.length)

  topicList.forEach((item, index) => {
    const cardTitle = wrapper.findAll('.clearfix').at(index).find('.link')

    t.is(cardTitle.text(), item.title)

    const avatar = wrapper.findAll('.avatar').at(index).find('img')

    t.is(avatar.attributes().src, item.member.avatar_large)

    const cardContent = wrapper.findAll('.card-content').at(index)

    t.true(cardContent.text().includes('• timeAgo'))
    t.true(cardContent.text().includes('• 最后访问 timeAgo'))
    t.is(cardContent.find('.link').text(), item.member.username)

    const nodeAvatar = wrapper.findAll('mu-avatar').at(index).find('img')

    t.is(nodeAvatar.attributes().src, 'image')

    const badge = wrapper.findAll('el-badge').at(index)

    t.is(badge.attributes().value, item.replies)
  })
})

test('methods: toTopic', t => {
  const { topicList } = t.context
  const $router = {
    push: () => {}
  }
  const spy = sinon.spy($router, 'push')

  const wrapper = shallowMount(TopicListChalk, {
    propsData: { topicList },
    mocks: {
      $router
    }
  })

  topicList.forEach((item, index) => {
    const toTopicTitle = wrapper.findAll('.clearfix').at(index).find('.link')
    const toTopicButton = wrapper.findAll('.card-action').at(index).findAll('el-button').at(1)

    toTopicTitle.trigger('click')
    toTopicButton.trigger('click')

    t.true(spy.withArgs(`/topic/${item.id}`).calledTwice)
  })
})

test('methods: toNode', t => {
  const { topicList } = t.context
  const $router = {
    push: () => {}
  }
  const spy = sinon.spy($router, 'push')

  const wrapper = shallowMount(TopicListChalk, {
    propsData: { topicList },
    mocks: {
      $router
    }
  })

  topicList.forEach((item, index) => {
    const toNodeButton = wrapper.findAll('.card-action').at(index).findAll('el-button').at(0)

    toNodeButton.trigger('click')

    t.true(spy.withArgs(`/node/${item.node.name}`).calledOnce)
  })
})

test('methods: toMember', t => {
  const { topicList } = t.context
  const $router = {
    push: () => {}
  }
  const spy = sinon.spy($router, 'push')

  const wrapper = shallowMount(TopicListChalk, {
    propsData: { topicList },
    mocks: {
      $router
    }
  })

  topicList.forEach((item, index) => {
    const toMemberText = wrapper.findAll('.card-content').at(index).find('.link')

    toMemberText.trigger('click')

    t.true(spy.withArgs(`/member/${item.member.username}`).calledOnce)
  })
})

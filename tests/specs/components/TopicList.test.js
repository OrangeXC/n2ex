import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import sinon from 'sinon'
import Vue from 'vue'
import TopicList from '../../../components/TopicList'
import { timeAgo, largeAvatar } from '../../../plugins/filters'
import mocks from '../__mocks__'

test.before(t => {
  Vue.config.ignoredElements = [
    'nuxt-link',
    'mu-card',
    'mu-card-header',
    'mu-card-actions',
    'mu-avatar',
    'mu-chip',
    'mu-icon'
  ]

  t.context.topicList = mocks.topicList
})

test('template', t => {
  const { topicList } = t.context
  const wrapper = shallowMount(TopicList, {
    propsData: { topicList },
    filters: { largeAvatar }
  })

  t.is(wrapper.findAll('mu-card').length, topicList.length)

  topicList.forEach((item, index) => {
    const nuxtLink = wrapper.findAll('nuxt-link').at(index)

    t.is(nuxtLink.attributes().to, `/m/topic/${item.id}`)

    const muCardHeader = nuxtLink.find('mu-card-header')

    t.is(muCardHeader.attributes().title, item.title)

    const chips = wrapper.findAll('.chip-container').at(index).findAll('mu-chip')
    const nodeChip = chips.at(0)
    const commentChip = chips.at(1)

    t.is(nodeChip.find('img').attributes().src, item.node.avatar_normal)
    t.is(nodeChip.text(), item.node.title)
    t.is(commentChip.find('mu-icon').attributes().value, 'comment')
    t.is(commentChip.text(), item.replies)
  })
})

test('methods: toNode', t => {
  const { topicList } = t.context
  const $router = {
    push: () => {}
  }
  const spy = sinon.spy($router, 'push')

  const wrapper = shallowMount(TopicList, {
    propsData: { topicList },
    mocks: {
      $router
    },
    filters: { largeAvatar }
  })

  topicList.forEach((item, index) => {
    const nodeChip = wrapper.findAll('mu-card').at(index).find('mu-chip')

    nodeChip.trigger('click')

    t.true(spy.withArgs(`/m/node/${item.node.name}`).calledOnce)
  })
})

test('methods: getSubTitle', t => {
  const { topicList } = t.context

  const wrapper = shallowMount(TopicList, {
    propsData: { topicList },
    filters: { largeAvatar }
  })

  topicList.forEach(item => {
    t.is(wrapper.vm.getSubTitle(item),
      `by ${item.member.username} • ${timeAgo(item.created)}`
    )
  })
})

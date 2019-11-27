<template>
  <topic-list :topic-list="appleList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  async asyncData ({ app }) {
    const nodes = ['apple', 'macos', 'ios', 'ipad', 'iphone', 'mbp']
    const appleList = await fetchTopicList(app.$axios, nodes)

    return {
      appleList
    }
  },
  head () {
    return {
      titleTemplate: '%s - Apple'
    }
  },
  layout: 'mobile'
}
</script>

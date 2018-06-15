<template>
  <topic-list :topicList="appleList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - Apple'
    }
  },
  async asyncData ({ app }) {
    const appleList = await fetchTopicList(app.$axios, 'apple', 'macos', 'ios', 'ipad', 'iphone', 'mbp')

    return {
      appleList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

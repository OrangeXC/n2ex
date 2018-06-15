<template>
  <topic-list-chalk :topicList="appleList"></topic-list-chalk>
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

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
  components: {
    TopicListChalk
  }
}
</script>

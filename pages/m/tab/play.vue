<template>
  <topic-list :topicList="playList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 好玩'
    }
  },
  async asyncData ({ app }) {
    const playList = await fetchTopicList(app.$axios, 'share', 'bb', 'games', 'travel', 'hardware')

    return {
      playList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

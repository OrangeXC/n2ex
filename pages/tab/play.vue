<template>
  <topic-list-chalk :topicList="playList"></topic-list-chalk>
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 好玩'
    }
  },
  async asyncData ({ app }) {
    const playList =  await fetchTopicList(app.$axios, 'share', 'bb', 'games', 'travel', 'hardware')

    return {
      playList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

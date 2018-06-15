<template>
  <topic-list :topicList="techList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 技术'
    }
  },
  async asyncData ({ app }) {
    const techList = await fetchTopicList(app.$axios, 'programmer', 'fe', 'js', 'nodejs', 'vue')

    return {
      techList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

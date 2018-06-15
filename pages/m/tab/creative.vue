<template>
  <topic-list :topicList="creativeList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 创意'
    }
  },
  async asyncData ({ app }) {
    const creativeList = await fetchTopicList(app.$axios, 'create', 'design', 'ideas')

    return {
      creativeList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

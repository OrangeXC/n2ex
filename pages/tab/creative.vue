<template>
  <topic-list-chalk :topicList="creativeList"></topic-list-chalk>
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 创意'
    }
  },
  async asyncData ({ app }) {
    const creativeList =  await fetchTopicList(app.$axios, 'create', 'design', 'ideas')

    return {
      creativeList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

<template>
  <topic-list-chalk :topic-list="creativeList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['create', 'design', 'ideas']
    const creativeList = await fetchTopicList(app.$axios, nodes)

    return {
      creativeList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 创意'
    }
  }
}
</script>

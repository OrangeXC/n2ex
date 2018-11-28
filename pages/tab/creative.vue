<template>
  <topic-list-chalk :topic-list="creativeList" />
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
    const nodes = ['create', 'design', 'ideas']
    const creativeList = await fetchTopicList(app.$axios, nodes)

    return {
      creativeList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

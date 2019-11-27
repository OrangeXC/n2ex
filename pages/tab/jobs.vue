<template>
  <topic-list-chalk :topic-list="jobList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['jobs', 'cv', 'career', 'outsourcing']
    const jobList = await fetchTopicList(app.$axios, nodes)

    return {
      jobList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 酷工作'
    }
  }
}
</script>

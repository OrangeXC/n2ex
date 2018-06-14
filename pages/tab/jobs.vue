<template>
  <topic-list-chalk :topicList="jobList"></topic-list-chalk>
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 酷工作'
    }
  },
  async asyncData ({ app }) {
    const jobList =  await fetchTopicList(app.$axios, 'jobs', 'cv', 'career', 'outsourcing')

    return {
      jobList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

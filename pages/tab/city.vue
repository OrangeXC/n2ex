<template>
  <topic-list-chalk :topicList="cityList"></topic-list-chalk>
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 城市'
    }
  },
  async asyncData ({ app }) {
    const cityList =  await fetchTopicList(app.$axios, 'beijing', 'shanghai', 'shenzhen', 'hangzhou', 'life')

    return {
      cityList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

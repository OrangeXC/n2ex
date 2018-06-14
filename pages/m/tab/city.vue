<template>
  <topic-list :topicList="cityList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

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
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

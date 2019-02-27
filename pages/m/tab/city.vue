<template>
  <topic-list :topic-list="cityList" />
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
  components: {
    TopicList
  },
  async asyncData ({ app }) {
    const nodes = ['beijing', 'shanghai', 'shenzhen', 'hangzhou', 'life']
    const cityList = await fetchTopicList(app.$axios, nodes)

    return {
      cityList
    }
  },
  layout: 'mobile'
}
</script>

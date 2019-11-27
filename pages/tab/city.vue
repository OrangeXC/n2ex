<template>
  <topic-list-chalk :topic-list="cityList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['beijing', 'shanghai', 'shenzhen', 'hangzhou', 'life']
    const cityList = await fetchTopicList(app.$axios, nodes)

    return {
      cityList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 城市'
    }
  }
}
</script>

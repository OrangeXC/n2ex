<template>
  <TopicListChalk :topic-list="cityList" />
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
    const nodes = ['beijing', 'shanghai', 'shenzhen', 'hangzhou', 'life']
    const cityList = await fetchTopicList(app.$axios, nodes)

    return {
      cityList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

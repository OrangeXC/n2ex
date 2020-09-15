<template>
  <topic-list :topic-list="hotList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('/api/topics/hot.json')

    return {
      hotList: data
    }
  },
  head () {
    return {
      titleTemplate: '%s - 最热'
    }
  },
  layout: 'mobile'
}
</script>

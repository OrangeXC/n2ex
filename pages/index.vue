<template>
  <topic-list-chalk :topic-list="hotList" />
</template>

<script>
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
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
  }
}
</script>

<template>
  <topic-list-chalk :topic-list="hotList" />
</template>

<script>
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 最热'
    }
  },
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('topics/hot.json')

    return {
      hotList: data
    }
  }
}
</script>

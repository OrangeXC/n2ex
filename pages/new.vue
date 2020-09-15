<template>
  <topic-list-chalk :topic-list="newList" />
</template>

<script>
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('/api/topics/latest.json')

    return {
      newList: data
    }
  },
  head () {
    return {
      titleTemplate: '%s - 最新'
    }
  }
}
</script>

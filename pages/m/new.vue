<template>
  <topic-list :topic-list="newList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  layout: 'mobile',
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

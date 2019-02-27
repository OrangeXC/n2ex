<template>
  <topic-list :topic-list="newList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 最新'
    }
  },
  components: {
    TopicList
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('topics/latest.json')

    return {
      newList: data
    }
  },
  layout: 'mobile'
}
</script>

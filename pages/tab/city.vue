<template>
  <topic-list :topicList="cityList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 城市'
    }
  },
  async asyncData ({ app }) {
    const [beijing, shanghai, shenzhen, hangzhou, life] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=beijing`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=shanghai`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=shenzhen`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=hangzhou`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=life`).then(res => res.data)
    ])

    const cityList = sortByDate([...beijing, ...shanghai, ...shenzhen, ...hangzhou, ...life])

    return {
      cityList
    }
  },
  components: {
    TopicList
  }
}
</script>

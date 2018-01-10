<template>
  <topic-list :topicList="dealList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    const [all4all, exchange, free, dn, tuan] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=all4all`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=exchange`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=free`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=dn`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=tuan`).then(res => res.data)
    ])

    const dealList = sortByDate([...all4all, ...exchange, ...free, ...dn, ...tuan])

    return {
      dealList
    }
  },
  components: {
    TopicList
  }
}
</script>

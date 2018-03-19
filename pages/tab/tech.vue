<template>
  <topic-list :topicList="techList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 技术'
    }
  },
  async asyncData ({ app }) {
    const [programmer, fe, js, nodejs, vue] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=programmer`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=fe`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=js`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=nodejs`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=vue`).then(res => res.data)
    ])

    const techList = sortByDate([...programmer, ...fe, ...js, ...nodejs, ...vue])

    return {
      techList
    }
  },
  components: {
    TopicList
  }
}
</script>

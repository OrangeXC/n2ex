<template>
  <topic-list :topicList="appleList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - Apple'
    }
  },
  async asyncData ({ app }) {
    const [ apple, macos, ios, ipad, iphone, mbp ] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=apple`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=macos`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=ios`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=ipad`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=iphone`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=mbp`).then(res => res.data)
    ])

    const appleList = sortByDate([...apple, ...macos, ...ios, ...ipad, ...iphone, ...mbp])

    return {
      appleList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

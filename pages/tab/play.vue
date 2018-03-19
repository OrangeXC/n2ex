<template>
  <topic-list :topicList="playList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 好玩'
    }
  },
  async asyncData ({ app }) {
    const [share, bb, games, travel, hardware] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=share`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=bb`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=games`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=travel`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=hardware`).then(res => res.data)
    ])

    const playList = sortByDate([...share, ...bb, ...games, ...travel, ...hardware])

    return {
      playList
    }
  },
  components: {
    TopicList
  }
}
</script>

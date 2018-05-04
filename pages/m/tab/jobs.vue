<template>
  <topic-list :topicList="jobList" />
</template>

<script>
import { sortByDate } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 酷工作'
    }
  },
  async asyncData ({ app }) {
    const [jobs, cv, career, outsourcing] = await Promise.all([
      app.$axios.get(`topics/show.json?node_name=jobs`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=cv`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=career`).then(res => res.data),
      app.$axios.get(`topics/show.json?node_name=outsourcing`).then(res => res.data)
    ])

    const jobList = sortByDate([...jobs, ...cv, ...career, ...outsourcing])

    return {
      jobList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

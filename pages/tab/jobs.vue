<template>
  <topic-list :topicList="jobList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=jobs`),
      app.$axios.get(`topics/show.json?node_name=cv`),
      app.$axios.get(`topics/show.json?node_name=career`),
      app.$axios.get(`topics/show.json?node_name=outsourcing`)
    ])
    .then(axios.spread(function (jobs, cv, career, outsourcing) {
      let sortlist = jobs.data.concat(cv.data, career.data, outsourcing.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        jobList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>

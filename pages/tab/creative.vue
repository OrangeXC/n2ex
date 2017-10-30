<template>
  <topic-list :topicList="creativeList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=create`),
      app.$axios.get(`topics/show.json?node_name=design`),
      app.$axios.get(`topics/show.json?node_name=ideas`)
    ])
    .then(axios.spread(function (create, design, ideas) {
      let sortlist = create.data.concat(design.data, ideas.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        creativeList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>

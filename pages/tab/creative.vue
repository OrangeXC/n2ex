<template>
  <topic-list :topicList="creativeList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=create`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=design`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=ideas`)
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

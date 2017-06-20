<template>
  <topic-list :topicList="playList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=share`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=bb`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=games`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=travel`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=hardware`)
    ])
    .then(axios.spread(function (share, bb, games, travel, hardware) {
      let sortlist = share.data.concat(bb.data, games.data, travel.data, hardware.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        playList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>

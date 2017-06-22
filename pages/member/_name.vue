<template>
  <section class="container">
    <mu-card class="user-card">
      <mu-card-header :title="user.username" :subTitle="user.tagline">
        <mu-avatar :src="user.avatar_normal" slot="avatar"/>
      </mu-card-header>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" backgroundColor="greenA100" v-if="user.website" @click="toWebsite(user.website)">
            <mu-avatar :size="32" icon="public" backgroundColor="greenA700" />{{ user.website }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="lightBlue100" v-if="user.twitter" @click="toTwitter(user.twitter)">
            <mu-avatar :size="32" src="../../img/twitter.png" />{{ user.twitter }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="grey300" v-if="user.github" @click="toGithub(user.github)">
            <mu-avatar :size="32" src="../../img/github.png" backgroundColor="#fff" />{{ user.github }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="deepOrange100" v-if="user.location" @click="toMap(user.location)">
            <mu-avatar :size="32" icon="location_city" backgroundColor="deepOrange800" />{{ user.location }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="blue300">
            <mu-avatar :size="32" icon="schedule" backgroundColor="indigo900" />{{ user.created | format }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <topic-list :topicList="topicList" />
  </section>
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'
import { format } from '~plugins/filters'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`members/show.json?username=${params.name}`),
      app.$axios.get(`topics/show.json?username=${params.name}`)
    ])
    .then(axios.spread(function (user, topicList) {
      return {
        user: user.data,
        topicList: topicList.data
      }
    }))
    .catch(error => console.log(error))
  },
  methods: {
    toWebsite (url) {
      window.open(url)
    },
    toGithub (name) {
      window.open(`https://github.com/${name}`)
    },
    toTwitter (name) {
      window.open(`https://twitter.com/${name}`)
    },
    toMap (location) {
      window.open(`https://www.google.com/maps?q=${location}`)
    }
  },
  components: {
    TopicList
  }
}
</script>

<style lang="scss">
.user-card {
  margin: -10px;
}
</style>


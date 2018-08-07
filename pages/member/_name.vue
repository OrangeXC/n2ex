<template>
  <div>
    <section>
      <el-card>
        <img
          class="card-background"
          :src="user.avatar_large"
          alt="background"
        >
        <div slot="header" class="card card-header">
          <div class="avatar">
            <img :src="user.avatar_large | largeAvatar" alt="avatar">
          </div>
          <div class="title">{{ user.username }}</div>
        </div>
        <mu-card-actions>
          <div class="chip-container">
            <mu-chip
              class="chip"
              color="greenA100"
              v-if="user.website"
              @click="toWebsite(user.website)"
            >
              <mu-avatar :size="32" color="greenA700">
                <mu-icon value="public"></mu-icon>
              </mu-avatar>
              {{ user.website }}
            </mu-chip>
            <mu-chip
              class="chip"
              color="lightBlue100"
              v-if="user.twitter"
              @click="toTwitter(user.twitter)"
            >
              <mu-avatar :size="32">
                <img src="~/assets/img/twitter.png" alt="twitter">
              </mu-avatar>
              {{ user.twitter }}
            </mu-chip>
            <mu-chip
              class="chip"
              color="grey300"
              v-if="user.github"
              @click="toGithub(user.github)"
            >
              <mu-avatar :size="32" color="#fff">
                <img src="~/assets/img/github.png" alt="github">
              </mu-avatar>
              {{ user.github }}
            </mu-chip>
            <mu-chip
              class="chip"
              color="deepOrange100"
              v-if="user.location"
              @click="toMap(user.location)"
            >
              <mu-avatar :size="32" color="deepOrange800">
                <mu-icon value="location_city"></mu-icon>
              </mu-avatar>
              {{ user.location }}
            </mu-chip>
            <mu-chip class="chip" color="blue300">
              <mu-avatar :size="32" color="indigo900">
                <mu-icon value="schedule"></mu-icon>
              </mu-avatar>
              {{ user.created | format }}
            </mu-chip>
          </div>
        </mu-card-actions>
      </el-card>
    </section>
    <topic-list-chalk :topicList="topicList"></topic-list-chalk>
  </div>
</template>

<script>
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 用户详情'
    }
  },
  async asyncData ({ app, params, error }) {
    const [user, topicList] = await Promise.all([
      app.$axios.get(`members/show.json?username=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Member not found' })),
      app.$axios.get(`topics/show.json?username=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Member not found' }))
    ])

    return {
      user,
      topicList
    }
  },
  methods: {
    toWebsite (url) {
      url.indexOf('http') === -1
        ? window.open(`http://${url}`)
        : window.open(url)
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
    TopicListChalk
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  position: relative;

  background-color: transparent;
}

.card-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  filter: blur(150px);
}

.card-header {
  line-height: 1;

  text-align: center;
}

.title {
  margin-top: 10px;
  font-size: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

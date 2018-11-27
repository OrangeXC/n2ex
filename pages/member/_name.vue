<template>
  <div>
    <section>
      <ElCard>
        <img
          class="card-background"
          :src="user.avatar_large"
          alt="background"
        >
        <div
          slot="header"
          class="card card-header"
        >
          <div class="avatar">
            <img
              :src="user.avatar_large | largeAvatar"
              alt="avatar"
            >
          </div>
          <div class="title">
            {{ user.username }}
          </div>
        </div>
        <MuCardActions>
          <div class="chip-container">
            <MuChip
              v-if="user.website"
              class="chip"
              color="greenA100"
              @click="toWebsite(user.website)"
            >
              <MuAvatar
                :size="32"
                color="greenA700"
              >
                <MuIcon value="public" />
              </MuAvatar>
              {{ user.website }}
            </MuChip>
            <MuChip
              v-if="user.twitter"
              class="chip"
              color="lightBlue100"
              @click="toTwitter(user.twitter)"
            >
              <MuAvatar :size="32">
                <img
                  src="~/assets/img/twitter.png"
                  alt="twitter"
                >
              </MuAvatar>
              {{ user.twitter }}
            </MuChip>
            <MuChip
              v-if="user.github"
              class="chip"
              color="grey300"
              @click="toGithub(user.github)"
            >
              <MuAvatar
                :size="32"
                color="#fff"
              >
                <img
                  src="~/assets/img/github.png"
                  alt="github"
                >
              </MuAvatar>
              {{ user.github }}
            </MuChip>
            <MuChip
              v-if="user.location"
              class="chip"
              color="deepOrange100"
              @click="toMap(user.location)"
            >
              <MuAvatar
                :size="32"
                color="deepOrange800"
              >
                <MuIcon value="location_city" />
              </MuAvatar>
              {{ user.location }}
            </MuChip>
            <MuChip
              class="chip"
              color="blue300"
            >
              <MuAvatar
                :size="32"
                color="indigo900"
              >
                <MuIcon value="schedule" />
              </MuAvatar>
              {{ user.created | format }}
            </MuChip>
          </div>
        </MuCardActions>
      </ElCard>
    </section>
    <TopicListChalk :topic-list="topicList" />
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
  components: {
    TopicListChalk
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

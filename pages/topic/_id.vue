<template>
  <section>
    <el-card>
      <div
        slot="header"
        class="card card-header"
      >
        <div class="avatar">
          <img
            :src="detail.member.avatar_large | largeAvatar"
            alt="avatar"
          >
        </div>
        <div class="card-header-content">
          <div class="title">
            {{ detail.title }}
          </div>
          <el-tag
            size="small"
            @click.native="toNode(detail.node.name)"
          >
            {{ detail.node.title }}
          </el-tag>
          <span
            class="link"
            @click="toMember(detail.member.username)"
          >
            {{ detail.member.username }}
          </span>
          • {{ detail.created | timeAgo }}
        </div>
      </div>
      <!-- eslint-disable -->
      <article
        class="article"
        v-html="detail.content_rendered"
      />
    </el-card>
    <Comment
      v-if="comments.length"
      :comments="comments"
    />
  </section>
</template>

<script>
import Comment from '~/components/Comment'

export default {
  head () {
    return {
      titleTemplate: '%s - 话题详情'
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ app, params }) {
    const [ detail, comments ] = await Promise.all([
      app.$axios.get(`topics/show.json?id=${params.id}`).then(res => res.data[0]),
      app.$axios.get(`replies/show.json?topic_id=${params.id}`).then(res => res.data)
    ])

    return {
      detail,
      comments
    }
  },
  components: {
    Comment
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    },
    toMember (name) {
      this.$router.push(`/member/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
}

.card-header-content {
  width: 800px;
}

.title {
  margin-bottom: 15px;
}

.link {
  margin: 0 3px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;

    color: #409EFF;
  }
}

.el-tag {
  cursor: pointer;
}

.avatar {
  width: 60px;
  height: 60px;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
  }
}
</style>

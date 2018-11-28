<template>
  <section class="main-container">
    <el-card
      v-for="item in topicList"
      :key="item.id"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span
          class="link"
          @click="toTopic(item.id)"
        >
          {{ item.title }}
        </span>
      </div>
      <div class="card-wrap">
        <div class="avatar">
          <img
            :src="item.member.avatar_large | largeAvatar"
            alt="avatar"
          >
        </div>
        <div>
          <div class="card-content">
            <span
              class="link"
              @click="toMember(item.member.username)"
            >
              {{ item.member.username }}
            </span>
            • {{ item.created | timeAgo }}
            • 最后访问 {{ item.last_touched | timeAgo }}
          </div>
          <div class="card-action">
            <el-button
              size="small"
              round
              @click="toNode(item.node.name)"
            >
              <mu-avatar :size="29">
                <img
                  :src="item.node.avatar_normal | image"
                  alt="avatar"
                >
              </mu-avatar>
              <span>{{ item.node.title }}</span>
            </el-button>
            <el-badge :value="item.replies">
              <el-button
                size="small"
                @click="toTopic(item.id)"
              >
                评论
              </el-button>
            </el-badge>
          </div>
        </div>
      </div>
    </el-card>
  </section>
</template>

<script>
export default {
  props: {
    topicList: {
      type: Array,
      required: true
    }
  },
  methods: {
    toTopic (id) {
      this.$router.push(`/topic/${id}`)
    },
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
.card-wrap {
  display: flex;
  align-items: center;
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

.link {
  margin: 0 3px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;

    color: #409EFF;
  }
}

.card-action {
  margin-top: 14px;
}

.el-button.is-round {
  margin-right: 16px;
  padding: 0 8px 0 0;

  .mu-avatar {
    vertical-align: -10px;
  }
}
</style>

<template>
  <div class="comment">
    <mu-card>
      <mu-list>
        <mu-sub-header>全部评论</mu-sub-header>
        <div v-for="(item, index) in comments" :key="index">
          <mu-list-item>
            <mu-list-item-action>
              <mu-avatar @click="toMember(item.member.username)">
                <img :src="item.member.avatar_normal" alt="avatar">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{ item.member.username }}</mu-list-item-title>
              <div class="mu-card-html" v-html="item.content_rendered"></div>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider inset />
        </div>
      </mu-list>
    </mu-card>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    toMember (name) {
      this.$router.push(`/member/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.mu-card-html {
	word-break: break-all;
}

.mu-card-html img {
  max-width: 100%;
}
</style>


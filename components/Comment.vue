<template>
  <mu-card>
    <mu-list>
      <mu-sub-header>全部评论</mu-sub-header>
      <div v-for="(item, index) in comments" :key="index">
        <mu-list-item :title="item.member.username" :describeLine="1000">
          <mu-avatar :src="item.member.avatar_normal" @click="toMember(item.member.username)" slot="leftAvatar"/>
          <div v-html="item.content_rendered" slot="describe"></div>
        </mu-list-item>
        <mu-divider inset />
      </div>
    </mu-list>
  </mu-card>
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

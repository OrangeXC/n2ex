<template>
  <mu-card>
    <mu-list>
      <mu-sub-header>全部评论</mu-sub-header>
      <template v-for="item in comments">
        <mu-list-item :title="item.member.username" :describeLine="1000">
          <mu-avatar :src="item.member.avatar_normal" @click="toMember(item.member.username)" slot="leftAvatar"/>
          <div v-html="item.content_rendered" slot="describe"></div>
        </mu-list-item>
        <mu-divider inset />
      </template>
    </mu-list>
  </mu-card>
</template>

<script>
import axios from 'axios'

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

<template>
  <mu-list>
    <mu-sub-header>全部评论</mu-sub-header>
    <template v-for="item in comments">
      <mu-list-item :title="item.member.username">
        <mu-avatar :src="item.member.avatar_normal" slot="leftAvatar"/>
        <div v-html="item.content_rendered" slot="describe"></div>
      </mu-list-item>
      <mu-divider inset />
    </template>
  </mu-list>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

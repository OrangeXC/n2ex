const topicList = [{
  id: 1,
  title: 'title1',
  member: {
    username: 'frank',
    avatar_normal: 'frank\'s avatar',
    avatar_large: 'frank\'s avatar'
  },
  node: {
    name: 'node one',
    title: 'node one title',
    avatar_normal: 'node one avatar'
  },
  replies: '66',
  created: 1529050000
}, {
  id: 2,
  title: 'title2',
  member: {
    username: 'jack',
    avatar_normal: 'jack\'s avatar',
    avatar_large: 'jack\'s avatar'
  },
  node: {
    name: 'node two',
    title: 'node two title',
    avatar_normal: 'node two avatar'
  },
  replies: '88',
  created: 1529050000
}]

const comments = [{
  member: {
    username: 'frank',
    avatar_normal: 'frank avatar'
  },
  content_rendered: '<div>test</div>'
}, {
  member: {
    username: 'jack',
    avatar_normal: 'jack avatar'
  },
  content_rendered: '<p>test</p>'
}]

export default {
  topicList,
  comments
}

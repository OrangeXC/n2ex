export function sortByDate (arr) {
  return arr.sort((a, b) => parseInt(a.created) < parseInt(b.created) ? 1
    : parseInt(a.created) === parseInt(b.created) ? 0 : -1
  )
}

export async function fetchTopicList (axios, ...args) {
  const allTopicList = await Promise.all(args.map(item =>
    axios.get(`topics/show.json?node_name=${item}`).then(res => res.data)
  ))

  const allTopic = [].concat.apply([], allTopicList)

  return sortByDate(allTopic)
}

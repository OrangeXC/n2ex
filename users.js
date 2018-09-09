var list = document.querySelectorAll('.remark_name')
var user = []

for (var i = 0; i < list.length; i++) {
  user.push(`${list[i].getAttribute('data-fakeid')} ${list[i].text}`)
}

console.log(user.join('\n'))

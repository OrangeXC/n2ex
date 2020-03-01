export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent

  const { userAgent, route, redirect } = context

  if (userAgent.includes('Mobile')) {
    if (route.path === '/') {
      redirect('/m')
    } else if (
      !route.path.includes('/m/') &&
      route.path !== '/m'
    ) {
      redirect(`/m${route.fullPath}`)
    }
  }

  if (!userAgent.includes('Mobile')) {
    if (route.path === '/m') {
      redirect('/')
    } else if (route.path.includes('/m/')) {
      redirect(route.fullPath.slice(2))
    }
  }
}

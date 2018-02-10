describe('Index page', () => {
  let page

  beforeAll(async () => {
    page = await browser.visitPage('/')
  })

  afterAll(async () => {
    await page.close()
  })

  it('renders index page', async () => {
    const elStr = await page.html()
    expect(elStr).toBeTruthy()
  })

  it ('index page route', async () => {
    const routeData = await page.nuxt.routeData()

    console.log(routeData)

    expect(routeData.path === '/').toBeTruthy()
  })
})

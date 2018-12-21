importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13a6dd174e87d5a1d106.js",
    "revision": "3ac9c4b4a931e7ccb3d7ad18dc19ac00"
  },
  {
    "url": "/_nuxt/1f1945b0a6e60cdfa1d2.js",
    "revision": "eabdae6a670a9a39ff6dba028ad83a13"
  },
  {
    "url": "/_nuxt/2537b581ad66deffe60d.js",
    "revision": "ae6cc9aa768a9968872dd1a1458e6fb9"
  },
  {
    "url": "/_nuxt/29f5597687530f454623.js",
    "revision": "3b3ff36ff030acc15bfbc8a37af729ff"
  },
  {
    "url": "/_nuxt/2aba4f73aabddd693484.js",
    "revision": "19b9cf4998c4985f0d968834688908e3"
  },
  {
    "url": "/_nuxt/2deece7579d4d70f7479.js",
    "revision": "591e256c3988f0a09d8929601a460bd1"
  },
  {
    "url": "/_nuxt/30bc0bbf117c257f9df8.js",
    "revision": "3c68681a80016e3ea0255a0e2cca3f20"
  },
  {
    "url": "/_nuxt/55b2a4ddb3d2d5a1a28b.js",
    "revision": "6385cff17dad652a5f2a2d78b5948f39"
  },
  {
    "url": "/_nuxt/5970061bc583267fc3ef.js",
    "revision": "420a885abee088bf25ecb811bfdfb205"
  },
  {
    "url": "/_nuxt/61fd6f5ed993875eaff4.js",
    "revision": "3361c78d913c5e7d0792d6bf8cf511c8"
  },
  {
    "url": "/_nuxt/6f7732a4367ad4dc7052.js",
    "revision": "1ea101f3845585982327607bf63d3909"
  },
  {
    "url": "/_nuxt/714ad48e057218f7fe60.js",
    "revision": "c544505f27889084065af3af65a09cfd"
  },
  {
    "url": "/_nuxt/73f017e2e9caaad2f58f.js",
    "revision": "3e02b4474475d00fd64d79260c6eca84"
  },
  {
    "url": "/_nuxt/77919b90c28004ee5d72.js",
    "revision": "cb99a2cbcbfc6d1d9da3f687bfb8c208"
  },
  {
    "url": "/_nuxt/7f61904b813c59461ffa.js",
    "revision": "5c3dac90740bf1d1419bf120204e8751"
  },
  {
    "url": "/_nuxt/833ec2a9ad0d0c90e305.js",
    "revision": "43672feb71134a6b6116f939389a6687"
  },
  {
    "url": "/_nuxt/83753c0760d1613c9579.js",
    "revision": "a922e195a61b9dc63fc4561995003b66"
  },
  {
    "url": "/_nuxt/854e8009e7efdbf82bad.js",
    "revision": "ee28b4a74199f1bb3b4efabf5f9144c1"
  },
  {
    "url": "/_nuxt/85f7b8576fe91c8712e7.js",
    "revision": "4b32034c3ccbb469987d62d5678df002"
  },
  {
    "url": "/_nuxt/879a95d2e02b3244c922.js",
    "revision": "5326211aa3ff22e3ca162a23eddc570b"
  },
  {
    "url": "/_nuxt/94220935f348f9033d89.js",
    "revision": "4ad057dbf2ad0eb56cdc844756d2c374"
  },
  {
    "url": "/_nuxt/a0e0fa8c4e8bbfcce151.js",
    "revision": "5adeb761b175bb5e46dbfb1fa06c90aa"
  },
  {
    "url": "/_nuxt/aad0218ff635a1219ac0.js",
    "revision": "1b4710ee1a83c334fdc6093da3cb248d"
  },
  {
    "url": "/_nuxt/ae6258a5fb0b637e1bb2.js",
    "revision": "4836a3b35e6be5e82b6e9ef3549863d8"
  },
  {
    "url": "/_nuxt/b6983ef3e59d01d30187.js",
    "revision": "cb9395758eca47d23b9c8b982669e1d8"
  },
  {
    "url": "/_nuxt/c72bee4c0400fd574ceb.js",
    "revision": "89221b03d6e4274b45181cde5fd9cdac"
  },
  {
    "url": "/_nuxt/c8e9cccdc5328f3d0c17.js",
    "revision": "a4739adbbe74532551603f887d10528d"
  },
  {
    "url": "/_nuxt/cac8e02d1d63552d4640.js",
    "revision": "3f4314431d0536c7c95507ea951d1cfa"
  },
  {
    "url": "/_nuxt/d441056642e5a5337df4.js",
    "revision": "ef0e4b76ff6cf8761953aab75e1462c4"
  },
  {
    "url": "/_nuxt/e17bc0f2c932d32508e1.js",
    "revision": "5c5a04122e3c4e30559e93209a840df5"
  },
  {
    "url": "/_nuxt/e2a0589489ac8ad154a9.js",
    "revision": "58fedd975a38a32ae5382f109e72bf63"
  },
  {
    "url": "/_nuxt/ee8785868a4417f99747.js",
    "revision": "541387ed3a1ca65e6d0bc8d19573223f"
  },
  {
    "url": "/_nuxt/f5013d87a98440199e02.js",
    "revision": "edda45b0a84d8251cc02a56999938665"
  },
  {
    "url": "/_nuxt/fb25952b09c1036cccbd.js",
    "revision": "be8847701dfbe1396933419d8f4dd439"
  }
], {
  "cacheId": "n2ex",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

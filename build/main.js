require('source-map-support/register')
module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__ (moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    ) { return value }
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value !== 'string') {
      for (var key in value) {
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
      }
    }
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault () {
          return module['default']
        }
        : /******/ function getModuleExports () {
          return module
        }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './server/index.js')
  )
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './nuxt.config.js':
    /*! ************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports = {
        head: {
          title: 'N2EX',
          meta: [
            {
              charset: 'utf-8'
            },
            {
              name: 'viewport',
              content:
                  'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1'
            },
            {
              hid: 'description',
              name: 'description',
              content: 'N2ex'
            }
          ],
          link: [
            {
              rel: 'icon',
              type: 'image/x-icon',
              href: '/icon.png'
            },
            {
              rel: 'stylesheet',
              href:
                  'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css'
            }
          ]
        },
        css: ['~assets/css/main.css'],
        loading: {
          color: '#409EFF'
        },
        modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/component-cache'],
        router: {
          middleware: 'redirect'
        },
        axios: {
          baseURL: 'https://proxy-oagpwnbkpe.now.sh',
          credentials: false,
          proxyHeaders: false
        },
        plugins: [
          '~plugins/element-ui.js',
          '~plugins/muse-ui.js',
          '~plugins/filters.js'
        ],
        build: {
          babel: {
            plugins: [
              [
                'component',
                {
                  libraryName: 'element-ui',
                  styleLibraryName: 'theme-chalk'
                }
              ]
            ]
          }
        }
      }

      /***/
    },

    /***/ './server/index.js':
    /*! *************************!*\
  !*** ./server/index.js ***!
  \*************************/
    /*! no exports provided */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! koa */ 'koa'
      )
      /* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */ __webpack_require__.n(
        koa__WEBPACK_IMPORTED_MODULE_0__
      )
      /* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! nuxt */ 'nuxt'
      )
      /* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */ __webpack_require__.n(
        nuxt__WEBPACK_IMPORTED_MODULE_1__
      )

      async function start () {
        const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a()
        const host = process.env.HOST || '127.0.0.1'
        const port = process.env.PORT || 3000 // Import and Set Nuxt.js options

        let config = __webpack_require__(
          /*! ../nuxt.config.js */ './nuxt.config.js'
        )

        config.dev = !(app.env === 'production') // Instantiate nuxt.js

        const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_1__['Nuxt'](config) // Build in development

        if (config.dev) {
          const builder = new nuxt__WEBPACK_IMPORTED_MODULE_1__['Builder'](
            nuxt
          )
          await builder.build()
        }

        app.use(async (ctx, next) => {
          await next()
          ctx.status = 200 // koa defaults to 404 when it sees that status is unset

          return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve)
            ctx.res.on('finish', resolve)
            nuxt.render(ctx.req, ctx.res, promise => {
              // nuxt.render passes a rejected promise into callback on error.
              promise.then(resolve).catch(reject)
            })
          })
        })
        app.listen(port, host)
  console.log(`Server listening on ${host}:${port}`); // eslint-disable-line
      }

      start()

      /***/
    },

    /***/ koa:
    /*! **********************!*\
  !*** external "koa" ***!
  \**********************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports = require('koa')

      /***/
    },

    /***/ nuxt:
    /*! ***********************!*\
  !*** external "nuxt" ***!
  \***********************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports = require('nuxt')

      /***/
    }

    /******/
  }
)
// # sourceMappingURL=main.map

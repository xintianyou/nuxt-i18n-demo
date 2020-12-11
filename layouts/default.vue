<template>
  <div class="app-container">
    <header class="header">
      <div class="logo">LOGO</div>
      <ul>
        <li>
          <nuxt-link :to="navbarRoute.index">
            <a :class="{'active': routerPath === '/'}">{{ $t('home') }}</a>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="navbarRoute.about">
            <a :class="{'active': routerPath === '/about'}">{{ $t('about') }}</a>
          </nuxt-link>
        </li>
        <li>被投企业</li>
        <li>团队</li>
        <li>动态</li>
        <li>
          <a @click="changeLanguage()">{{ locale === 'zh' ? 'EN' : '中文' }}</a>
        </li>
      </ul>
    </header>
    <Nuxt />
    <footer></footer>
  </div>
</template>

<script>
  export default {
    asyncData({app}, callback) {
      app.head.title = 'new title'
      callback(null, {})
    },
    data() {
      return {
        routerPath: '',
        navbarRoute: {
          index: '/',
          about: '/about'
        }
      }
    },
    computed: {
      locale() {
        return this.$i18n.locale
      }
    },
    methods: {
      changeLanguage() {
        const code = this.locale === 'zh' ? 'en' : 'zh'
        this.$i18n.setLocale(code)
      },
      // 获取当前路由，根据当前语言设置navbar的路由
      getCurrentRouter() {
        this.routerPath = $nuxt.$route.path
        this.navbarRoute = {
          index: this.locale === 'zh' ? '/' : '/en',
          about: this.locale === 'zh' ? '/about' : '/en/about',
        }
      }
    },
    mounted() {
      this.getCurrentRouter()
    },
    watch: {
      "$route"(newVal) {
        this.getCurrentRouter()
      }
    }
  }
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul, ol, li {
  list-style: none;
}

a {
  text-decoration: none;
}

.app-container {
  padding-top: 90px;
  width: 100%;
  height: 100vh;
  .header {
    width: 100%;
    height: 90px;
    line-height: 60px;
    position: fixed;
    z-index: 999;
    top: 0;
    padding: 15px 5vw;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.9);
    animation: header-fead-down 0.5s;
    .logo {
      height: 60px;
      width: 150px;
      background-color: #ddd;
      text-align: center;
    }
    ul {
      height: 60px;
      line-height: 60px;
      display: flex;
      li {
        padding-left: 3vw;
        cursor: pointer;
        color: #222;
        a {
          display: inline-block;
          height: 60px;
        }
        a:visited {
          color: #222;
        }
        a:hover {
          font-weight: 600;
        }
      }
      .active {
        position: relative;
        &:after{
          position: absolute;
          bottom: 0;
          left: 0;
          content: '';
          width: 100%;
          height: 4px;
          background-color: #093264;
          border-radius: 3px;
        }
      }
    }
  }
  @keyframes header-fead-down {
    from {
      top: -90px;
    }
    to {
      top: 0;
    }
  }
}
</style>

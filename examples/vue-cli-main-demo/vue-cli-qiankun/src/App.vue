<template>
  <div id="main-app">
    <div id="nav">
      <a @click="handleClick(item)" :key="item.name" v-for="item in menus">
        {{ item.name }}
      </a>
    </div>
    <router-view v-show="showSelf" />
    <template v-show="!showSelf">
      <div id="sub-vue"></div>
      <div id="sub-nuxt"></div>
    </template>

    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      const { menus } = this.$store.state;
      console.log("this.$store.state", this.$store);

      return [
        {
          name: "home",
          path: "/"
        },
        {
          name: "about",
          path: "/about"
        }
      ].concat(menus);
    },
    showSelf() {
      switch (this.$route.name) {
        case "Home":
        case "About":
          return true;
        default:
          return false;
      }
    }
  },
  methods: {
    handleClick(item) {
      if (item.path === this.$route.path) return;

      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="less"></style>

<style lang="scss">
body {
  margin: 0;
}

#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;

  > #nav {
    padding: 30px;

    a {
      cursor: pointer;
      display: inline-block;
      padding: 10px 20px;
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  > footer {
    background-color: gray;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
  }

  > #sub-application {
    min-height: calc(100vh - 304px);
    background-color: lighten(gray, 40);
  }

  > .test {
    border: solid 1px blue;
    min-height: 100vh;
  }
}
</style>

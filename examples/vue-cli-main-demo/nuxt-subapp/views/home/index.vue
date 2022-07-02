<template>
  <div class="container" :style="containerStyle">
    <h2>Home page</h2>
    <button @click="go2about">go2about</button>
    <button @click="toast">Toast</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minHeight: "30vh"
    };
  },
  computed: {
    containerStyle() {
      return {
        minHeight: this.minHeight
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.minHeight = "100vh";
    }, 5000);
  },
  methods: {
    go2about() {
      this.$router.push({ name: "About" });
    },
    toast() {
      console.log(this.$sdk);
      this.$sdk &&
        this.$sdk.toast({
          message: "来自 nuxt 触发的 toast",
          type: "success"
        });
    }
  }
};
</script>

<style>
.container {
  border: solid 1px red;
}
</style>

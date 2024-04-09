<template>
  <img src="./logo.png" />
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
</template>

<script lang="ts">
  import { ref } from "vue";
  export default {
    setup() {
      const count = ref<number>("1");
      const inc = (): void => {
        count.value++;
      };
      return {
        count,
        inc,
      };
    },
  };
</script>

<style scoped>
  img {
    width: 200px;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

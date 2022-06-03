<!-- Demo.vue -->
<template>
  <div class="demo">
    <component :is="componentName" />
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    props: {
      componentName: { type: String, required: true }
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

.demo {
    background: #1d1d1d;
    font-family: 'Poppins', sans-serif;
}
</style>
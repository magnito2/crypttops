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

<style lang="scss">
table {
    border: none;
}

.demo {
    background: #1d1d1d;
    font-family: 'Poppins', sans-serif;

}
</style>
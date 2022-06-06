<template>
  <div class="wrapper">
    <CTA 
    value="Join Leaders Board"
    :action="showAlert"
  />
  </div>
</template>

<script>
export default {
  name: 'buttons-view',
  methods: {
    showAlert(){
      alert('You clicked me')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 20%;
}
</style>
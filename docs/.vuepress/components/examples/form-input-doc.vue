<template>
  <div class="input-wrapper">
      <Input 
        placeholder="Your Prefered Username"
        type="text"
      />
  </div>
</template>

<script>
import Input from '../../../../src/lib-components/form-elements/Input.vue'
export default {
  components: { Input },

}
</script>

<style>
.input-wrapper {
    padding: 20px;
    width: 50%;
}
</style>
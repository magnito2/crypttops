<template>
  <div class="input-wrapper">
      <APIInput 
        type="secret"
      />
  </div>
</template>

<script>
import APIInput from '../../../../src/lib-components/form-elements/APIInput.vue'
export default {
  components: { APIInput },

}
</script>

<style>
.input-wrapper {
    padding: 20px;
    width: 50%;
}
</style>
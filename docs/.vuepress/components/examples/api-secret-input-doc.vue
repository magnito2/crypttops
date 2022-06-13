<template>
  <div class="input-wrapper">
      <APIInput 
        type="secret"
      />
  </div>
</template>

<script>
import { APIInput } from '../../../../dist/esm/formElements';
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
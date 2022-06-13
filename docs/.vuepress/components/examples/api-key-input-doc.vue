<template>
  <div class="input-wrapper">
      <APIInput 
        type="key"
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
    padding: 10px 20px;
    width: 50%;
}
</style>
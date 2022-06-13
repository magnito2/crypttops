<template>
  <div class="input-wrapper">
      <Terms />
  </div>
</template>

<script>
import { Terms } from '../../../../dist/esm/formElements';
export default {
  components: { Terms },

}
</script>

<style>
.input-wrapper {
    padding: 20px;
    width: 50%;
}
</style>
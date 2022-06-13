<template>
  <div class="input-wrapper">
      <Input 
        placeholder="Your Prefered Email"
        type="email"
      />
  </div>
</template>

<script>
import { Input } from '../../../../dist/esm/formElements'
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
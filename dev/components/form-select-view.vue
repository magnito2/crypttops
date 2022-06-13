<template>
  <div class="wrapper">
      <FormSelect 
        :options="['Tier 0', 'Tier 1', 'Tier 2']"
        defaultText="Select Tier"
      />
  </div>
</template>

<script>
import { Select as FormSelect } from '../../dist/esm/formElements'
export default { 
  name: 'FormSelectView',
  components: { FormSelect }
}
</script>

<style>
.wrapper {
  margin: 20px 0;
}
</style>
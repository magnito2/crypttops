<template>
  <div class="wrapper">
      <Select 
        :options="['Tier 0', 'Tier 1', 'Tier 2']"
        defaultText="Select Tier"
      />
  </div>
</template>

<script>
import { Select } from '../../../../dist/esm/formElements'
export default { 
  name: 'FormSelectView',
  components: { Select }
}
</script>

<style>
.wrapper {
  margin: 20px;
  padding: 10px;
  width: 350px;

}
</style>
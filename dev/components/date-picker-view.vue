<template>
  <div class="api-wrapper">
    <DatePicker />
  </div>
</template>

<script>
import { DatePicker2 } from '../../src/lib-components/form-elements';
export default {
  name: 'DatePickerView',
  components: {
    DatePicker
  }
}
</script>

<style lang="scss" scoped>
.api-wrapper {
  border: 1px solid #9f9f9f;
  padding: 10px 20px;
  border-radius: 15px;
  color: #9f9f9f;
  width: 406px;
  .submit-wrapper {
    width: 406px;
  }
}
</style>
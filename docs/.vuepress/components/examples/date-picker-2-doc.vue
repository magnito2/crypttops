<template>
  <div class="input-wrapper">
      <date-picker-2
        v-model="date"
      />
  </div>
</template>

<script>
import { DatePicker2 } from '../../../../dist/esm/formElements';
export default {
  components: { DatePicker2 },
  data(){
    return {
      date: new Date(2022, 8, 8)
    }
  }

}
</script>

<style>
.input-wrapper {
    padding: 10px 20px;
    width: 50%;
}
</style>
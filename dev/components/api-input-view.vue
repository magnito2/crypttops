<template>
  <div class="api-wrapper">
    <h3>KEY FORM</h3>
    <APIInput type="key" v-model="APIKey" />
    <APIInput type="secret" v-model="APISecret" />
    <div class="submit-wrapper">
      <Submit value="Finish Setup" />
    </div>
  </div>
  <div class="show">
    <h3>API Key {{ APIKey }}</h3>
    <h3>API Secret {{ APISecret }}</h3>
  </div>
</template>

<script>
import { APIInput, Submit } from '../../src/lib-components/form-elements';
export default {
  name: 'APIInputView',
  components: {
    APIInput, Submit
  },
  data(){
    return {
      APIKey: '1234567',
      APISecret: 'ExtreeeemySecretThing'
    }
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
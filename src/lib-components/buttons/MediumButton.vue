<template>
  <div class="btn-wrapper" :style="styling.wrapper">
      <input type="submit" :value="value" @click.prevent="action" :style="styling.input">
  </div>
</template>

<script>
export default {
  name: 'MediumButton',
  props: {
    action: {type: Function, required: true},
    value: { type: String, default: 'Activate'},
    styles: Object
  },
  computed: {
    styling(){
      return {
        ...this.styles,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input{
    margin: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border:none;
    width: 100%;
    height: 37px;
    background: #FFA800;
    box-shadow: 0px 0px 12px #FFA800;
    border-radius: 7px;

    &:hover{
      background: #9f9f9f;
      box-shadow: none;
    }
  }

  .wrapper {
    margin: 0;
    padding: 0;
  }
</style>
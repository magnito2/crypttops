<template>
  <div class="view-wrapper">
      <MediumButton 
        value="Say my name"
        :action="clicked"
      />
  </div>
</template>

<script>
import { MediumButton } from '../../../../dist/esm/buttons';
export default {
  components: { MediumButton },
  methods: {
      clicked(){
          alert('DJ Khaled');
      }
  }
}
</script>

<style lang="scss" scoped>
.view-wrapper {

    padding: 30px;
    width: 50%;
}
</style>
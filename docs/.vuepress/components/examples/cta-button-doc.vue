<template>
  <div class="view-wrapper">
      <CTAButton 
        value="Join our LeaderBoard"
        :action="clicked"
      />
  </div>
</template>

<script>
import { CTAButton } from '../../../../dist/esm/buttons';
export default {
  components: { CTAButton },
  methods: {
      clicked(){
          alert('Hello world');
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
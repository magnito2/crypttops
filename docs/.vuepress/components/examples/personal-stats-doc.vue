<template>
  <div class="wrapper">
      <PersonalStats />
  </div>
</template>

<script>
import { PersonalStats } from '../../../../dist/esm';
export default {
  components: { PersonalStats },

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px;
}

</style>
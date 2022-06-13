<template>
  <div class="stats-view">
      <PersonalStats />
  </div>
</template>

<script>
import { PersonalStats } from '../../dist/esm';
export default {
  name: 'PersonalStatsView',
  components: {
    PersonalStats
  }
}
</script>

<style lang="scss" scoped>

</style>
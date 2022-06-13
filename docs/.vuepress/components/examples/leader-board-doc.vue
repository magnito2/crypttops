<template>
  <div class="doc-wrapper">
    <LeaderBoard 
      :pairs="pairs"
      :data="leaders"
    />
  </div>
</template>

<script>
import { LeaderBoard } from '../../../../dist/esm';
export default {
    name: "leader-board-doc",
    components: { LeaderBoard },
    data(){
      return {
        leaders: [
        {
          name: 'John Mitchel D.',
          pairs: [1.234, 3.245, 2.650, -0.34743]
        },
        {
          name: 'Liam',
          pairs: [-1.234, 3.245, -2.650, 0.34743]
        },
        {
          name: 'Tony Starks',
          pairs: [10.234, 30.245, -15.650, 34.743]
        },
      ],
      pairs: ['ETHUSD','BTCUSD', 'XRPUSD', 'EOSUSD']
      }
    }
}
</script>

<style lang="scss" scoped>
.doc-wrapper {
  padding: 10px;
}
</style>
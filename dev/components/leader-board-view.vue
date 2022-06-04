<template>
    <div class="leader-board">
        <LeaderBoard
            :data = 'leaders'
            :pairs = 'pairs'
        />
    </div>
</template>
<script>
export default {
    name: 'leader-board-view',
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
    },
    setup() {
        
    },
}
</script>
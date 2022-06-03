<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { CryptSample } from '@/entry.esm';
import { LeaderBoard } from '../src/lib-components';

export default defineComponent({
    name: "ServeDev",
    data() {
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
      ]
      }
    }
});
</script>

<template>
  <div id="app">
    <LeaderBoard
      :pairs="['ETHUSD','BTCUSD', 'XRPUSD', 'EOSUSD']"
      :data="leaders"
    />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
    background: #1d1d1d;
    font-family: 'Poppins', sans-serif;
  }
</style>

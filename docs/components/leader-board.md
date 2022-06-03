# LeaderBoard

Displays the top performing portfolios

<Demo componentName="examples-leader-board-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { LeaderBoard } from '@magnito/crypttops-library';

export default {
    
}
</script>
<template>
    <div>
        <LeaderBoard
            :pairs="pairs"
            :data="data"
        >
    </div>
</template>
```

## Source Code

@[code{33-43}](../../src/lib-components/LeaderBoard.vue)

## Props

`data` : An array of Dictionaries containing information to be rendered in the following format
```js:no-v-pre
// Format of data array
[
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
```
`pairs` : The names of crypto pairs to be displayed
```js:no-v-pre
// Format of pairs array
['ETHUSD','BTCUSD', 'XRPUSD', 'EOSUSD']
```
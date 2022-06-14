# Pagination
Pagination Item

## Preview
Usage with LeaderBoard

<Demo componentName="examples-pagination-doc" />

## Usage

### Component
```js:no-v-pre
// 
<script>
import { Paginator } from '@magnito2/crypttops-library/buttons';
import { LeaderBoard } from '@magnito2/crypttops-library';

import { store } from './store';

export default {
    data(){
        return {
            store,
            currentPage: 1,
            itemsPerPage: 10
        }
    },
    methods: {
        goToPage(pageNumber){
            currentPage = pageNumber;
        }
    },
    computed: {
        totalPages(){
            return this.store.getTotalPages();
        },
        pageContent(){
            return this.store.getPageContent(this.currentPage, this.itemsPerPage)
        }
    }
}
</script>
<template>
    <div class="pagination-wrapper">
        <leader-board 
        :data = 'pageContent'
        :pairs = 'pairs'
        />
        <hr />
        <Pagination
            :goToPage="goToPage"
            :totalPages="totalPages"
            :currentPage="currentPage" 
        >
    </div>
</template>
```

### Store Data
```js:no-v-pre
import { reactive } from "vue";

export const store = reactive({
    data: {
        pairs: ['ETHUSD','BTCUSD', 'XRPUSD', 'EOSUSD'],
        leaders: [
        {
          id: 1,
          name: 'John Mitchel D.',
          pairs: [1.234, 3.245, 2.650, -0.34743]
        },
        {
          id: 2,
          name: 'Liam',
          pairs: [-1.234, 3.245, -2.650, 0.34743]
        } 
        ...
        ]
    },
    getPageContent(pageNo = 1, itemsPerPage = 10){
        const startIdx = (pageNo - 1) * itemsPerPage;
        const endIdx = pageNo * itemsPerPage;
        return this.data.leaders.slice(startIdx, endIdx);
    },
    getPairs(){
        return this.data.pairs;
    },
    getTotalPages(itemsPerPage = 10){
        return Math.ceil(this.data.leaders.length / itemsPerPage);
    }
});

```

## Props
- `goToPage` - A function to switch page. Takes param of `pageNo` which is the page number to be switched to
- `totalPages` : The total number of pages, this is found by `totalItems/itemsPerPage` 
- `currentPage` : The current page. Check implementation above on how to reactively set these params
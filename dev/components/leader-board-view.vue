<template>
    <div class="leader-board">
        <LeaderBoard
            :data = 'leaders'
            :pairs = 'pairs'
            :handlePaginator = "goToPage"
            :totalPages="totalPages"
            :currentPage="currentPage"
            :pageItemsNo="pageItemsNo"
        />
    </div>
</template>
<script>
import { LeaderBoard } from './../../src/lib-components';
import { store } from '../store';

export default {
    name: 'leader-board-view',
    components: {
      LeaderBoard,
    },
    data(){
      return {
        store,
        currentPage: 1,
        pageItemsNo: 10
      }
    },
    computed: {
      leaders(){
        return this.store.getLeadersPage(this.currentPage, this.pageItemsNo)
      },
      pairs(){
        return this.store.getLeadersPairs()
      },
      totalPages(){
        return this.store.getTotalPages(this.pageItemsNo)
      }
    },
    methods: {
      goToPage(pageNo){
        console.log('We got to view')
        this.currentPage = pageNo;
      }
    }
}
</script>
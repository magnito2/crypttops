<template>
  <div class="pagination-wrapper">
    <leader-board 
        :data = 'pageContent'
        :pairs = 'pairs'
    />
    <hr />
    <pagination
        :goToPage="goToPage"
        :totalPages="totalPages"
        :currentPage="currentPage" 
    />
  </div>
</template>

<script>
import { LeaderBoard } from '../../../../dist/esm';
import { Pagination } from '../../../../dist/esm/buttons';

import { store } from './store';
export default {
    data(){
        return {
            store,
            currentPage: 1,
            itemsPerPage: 5
        }
    },
    components: { LeaderBoard, Pagination },
    methods: {
        goToPage(pageNumber){
            this.currentPage = pageNumber;
        }
    },
    computed: {
        totalPages(){
            return this.store.getTotalPages(this.itemsPerPage);
        },
        pageContent(){
            return this.store.getPageContent(this.currentPage, this.itemsPerPage)
        },
        pairs(){
            return this.store.getLeadersPairs()
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    hr {
        width: 95%;
        border: 1px solid #233550;
      }
}
</style>
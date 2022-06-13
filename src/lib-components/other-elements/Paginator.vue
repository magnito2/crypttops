<template>
  <div class="pagination-wrapper">
      <p>Page {{currentPage}} of {{ totalPages }}</p>
      <ul>
        <li v-if="currentPage !== 1"><div class="pill" @click="handleClick" data-val="prev">{{"<<"}}</div></li>
        <li v-if="showFirstPage"><div class="pill tablet" @click="handleClick" data-val="first">First</div></li>
        <li v-if="showFirstPage">...</li>
        <li v-for="(page,idx) in pages" :key="idx">
            <div class="pill" @click="handleClick" :data-val="page" :class="{active : page == currentPage}">{{ page }}</div>
        </li>
        <li v-if="showLastPage">...</li>
        <li v-if="showLastPage"><div class="pill tablet" @click="handleClick" data-val="last">Last</div></li>
        <li v-if="currentPage !== totalPages"><div class="pill" @click="handleClick" data-val="next">{{">>"}}</div></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Paginator',
    props: {
        goTo: Function,
        totalPages: Number,
        currentPage: Number,
        displayLinks: { type: Number, default: 5}
    },
    computed: {
        pages(){
            const showPages = [];
            const steps = Math.floor(this.displayLinks / 2);
            let start = this.currentPage - steps;
            let end = this.currentPage + steps;
            if(start < 1){
                end = end - start + 1;
                start = 1;
            }
            if( end > this.totalPages){
                start = start - (end - this.totalPages + 1);
                if(start < 1){
                    start = 1;
                }
                end = this.totalPages;
            }
            for(let i=start; i <= end; i++){
                showPages.push(i);
            }
            return showPages;
        },
        showFirstPage(){
            return this.currentPage > Math.ceil(this.displayLinks/2);
        },
        showLastPage(){
            return (this.totalPages - Math.floor(this.displayLinks/2)) > this.currentPage;
        }
    },
    methods: {
        handleClick(e){
            const value = e.target.dataset.val;
            switch(value){
                case 'first':
                case '1':
                    this.goTo(1);
                    break;
                case 'last':
                    this.goTo(this.totalPages);
                    break;
                case 'prev':
                    if(this.currentPage <= 1 ) break;
                    this.goTo(this.currentPage - 1);
                    break;
                case 'next':
                    if(this.currentPage >= this.totalPages) break;
                    this.goTo(this.currentPage + 1);
                    break;
                default:
                    this.goTo(parseInt(value));
                    break;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            list-style-type: none;
            margin: 5px;
            .pill {
                background: #1d1d1d;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                text-align: center;
                cursor: pointer;

                &:hover {
                    background: #ffa800 ;
                    color: #1d1d1d ;
                }

                &.active {
                    border: 2px solid #ffa800 ;
                    width: 27px;
                    height: 27px;
                }

                &.tablet {
                    width: 54px;
                    border-radius: 5px;
                }
            }
            
        }
    }

    p {
        position: absolute;
        left: 80px;
        font-size: 12px;
    }
}
</style>
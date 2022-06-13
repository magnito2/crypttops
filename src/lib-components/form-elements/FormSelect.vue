<template>
  <div class="input-select" :class="{'select-arrow-active' : showOptions}" @click="toggleOptions" ref="selectRef">
      <p class="current-selected">{{ selected || defaultText }}</p>
    <ul class="options" v-if="showOptions">
        <li v-for="(opt, idx) in options" 
            :key="idx" 
            @click="selectOption" 
            :data-val="opt" 
            :class="{'selected-option' : opt === selected}"
        >
            {{ opt }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'FormSelect',
    props: {
        options: { type: Array, required: true},
        defaultText: { type: String, default: 'Choose Option'},
        modelValue: String,
    },
    emits: ['update:modelValue'],
    data(){
        return {
            showOptions: false,
            selected: this.modelValue,
        }
    },
    methods: {
        toggleOptions(e){
            this.showOptions = !this.showOptions;
            
            if(this.showOptions){
                document.body.addEventListener('click', this.closeOutside);
            } else {
                document.body.removeEventListener('click', this.closeOutside)
            }
        },
        selectOption(e){
            this.selected = e.target.getAttribute('data-val');
            console.log(`Updating ${this.modelValue} with ${this.selected}`)
            this.$emit("update:modelValue", this.selected);
        },
        closeOutside(e){
            if(!(e.target == this.$refs.selectRef || this.$refs.selectRef.contains(e.target))){
                this.showOptions = false;
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.input-select {
    width: 100%;
    position: relative;
    height:55px;
    box-sizing: border-box;
    background: #131313;
    border: 2px solid #3B3B3B;
    border-radius: 7px;
    color: #9F9F9F;
    font-size: 14px;
    margin: 18px 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    .current-selected {
        padding: 0 8px;
        border: 1px solid transparent;
    }
    .options {
        margin: 0;
        padding: 0;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        transform: translateY(45px);
        z-index: 100;
        li {
            background: #131313;
            list-style-type: none;
            padding: 8px;
            border: 1px solid transparent;
            border-color: transparent transparent #1b1b1bab transparent;
            cursor: pointer;

            &:hover {
                background:#3B3B3B;
            }

            &.selected-option {
                background:#3B3B3B;
            }
        }
    }

     /* Style the arrow inside the select element: */
    &:after {
        position: absolute;
        content: "";
        top: 16px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #3B3B3B transparent transparent transparent;
    }

    /* Point the arrow upwards when the select box is open (active): */
    &.select-arrow-active:after {
        border-color: transparent transparent #3B3B3B transparent;
        top: 8px;
    }
}

</style>
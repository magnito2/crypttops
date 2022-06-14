<template>
  <div class="wrapper">
      <medium-button value="Open Modal" :action="toggleModal" />
      <Teleport to="#modal-port">
          <APIModal v-if="showModal" :closeModal="closeModal" v-model="APIData"/>
      </Teleport>
  </div>
</template>


<script>
import { APIModal } from '../../../../dist/esm/modals';
import { MediumButton } from '../../../../dist/esm/buttons';
export default {
    components: {
        APIModal,
        MediumButton
    },
    data(){
        return {
            APIData : {
                APIKey: '',
                APISecret: ''
            },
            showModal : false
        }
    },
    methods: {
        toggleModal(){
            this.showModal = !this.showModal;
        },
        closeModal(){
            this.showModal = false;
        }
    },
    beforeMount(){
        const elem = document.createElement('div');
        elem.setAttribute('id','modal-port');
        document.body.appendChild(elem);
    },
    unmounted(){
        const elem = document.getElementById('modal-port');
        elem.remove();
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 10px;
    width: 200px;
}
</style>
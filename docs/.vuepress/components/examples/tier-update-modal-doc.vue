<template>
  <div class="wrapper">
      <medium-button value="Open Modal" :action="toggleModal" />
      <Teleport to="#modal-port">
          <TierUpdateModal v-if="showModal" :closeModal="closeModal" v-model="tierUpdateData"/>
      </Teleport>
  </div>
</template>

<script>
import { TierUpdateModal } from '../../../../dist/esm/modals';
import { MediumButton } from '../../../../dist/esm/buttons';
export default {
    components: {
        TierUpdateModal,
        MediumButton
    },
    data(){
        return {
            tierUpdateData: {
                tier: 'Tier 0',
                date: new Date().toISOString().substr(0, 10),
                status: 'Inactive',
                tradingVol: '0',
                rewards: '0'
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
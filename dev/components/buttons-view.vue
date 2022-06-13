<template>
  <div class="wrapper">
    <div class="but-wrapper">
      <medium-button value="Medium Button" :action="toggleModal" />
    </div>
  </div>
  <div class="modal-wrapper">
    <Teleport to="#modal-port">
      <TierUpdateModal v-if="showModal" :closeModal="closeModal" v-model="tierUpdateData" />
    </Teleport>
  </div>
</template>

<script>
import { MediumButton } from '../../src/lib-components/buttons';
import { TierUpdateModal } from '../../src/lib-components/modals';

export default {
  name: 'buttons-view',
  components: { MediumButton, TierUpdateModal },
  data(){
    return {
      tierUpdateData: {
        tier: 'Tier 0',
        date: new Date().toISOString().substr(0, 10),
        status: 'Inactive',
        tradingVol: '0',
        rewards: '0'
      },
      showModal: false
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
  width: 100%;
  margin: 0px;

  .but-wrapper {
    margin: 20px;
    width: 135px;
  }
}
</style>
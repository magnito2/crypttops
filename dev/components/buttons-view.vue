<template>
  <div class="wrapper">
    <div class="but-wrapper">
      <medium-button value="Medium Button" :action="toggleModal" :styles="styles.button" />
    </div>
  </div>
  <div class="modal-wrapper">
      <TierUpdateModal v-if="showModal" :closeModal="closeModal" v-model="tierUpdateData" />
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
      showModal: false,
      styles: {
        button: {
          wrapper: {
            width: '350px',
            height: '100px'
          },
          input: {
            'border-radius': '50px',
            background: 'white'
          }
        }
      }
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
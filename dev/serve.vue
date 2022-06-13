<script>
// Uncomment import and local "components" registration if library is not registered globally.
import LeaderBoardView from './components/leader-board-view.vue'
import FormInputView from './components/form-input-view.vue'
import FormSubmitView from './components/form-submit-view.vue'
import FormTermsView from './components/form-terms-view.vue'
import APIInputView from './components/api-input-view.vue'
import ButtonsView from './components/buttons-view.vue'
import PersonalStatsView from './components/personal-stats-view.vue'
import ModalView from './components/modal-view.vue'
import FormSelect from './components/form-select-view.vue'
import { APIModal, TierUpdateModal } from '../dist/esm/modals'

import { store } from './store'

export default {
    name: "ServeDev",
    components: {
    LeaderBoardView,
    FormInputView,
    FormSubmitView,
    FormTermsView,
    APIInputView,
    ButtonsView,
    PersonalStatsView,
    ModalView,
    FormSelect,
    TierUpdateModal,
    APIModal
},
  data(){
    return {
      store
    }
  },
  methods: {
    closeAPIModal(){
      this.store.toggleApiModal();
    },
    closeTierModal(){
      store.toggleTierModal();
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="wrapper-stats">
        <PersonalStatsView />
        <LeaderBoardView/>
      </div>
      <div class="wrapper-form">
        <h3>Signup Form</h3>
        <FormInputView />
        <FormTermsView />
        <FormSubmitView />
      </div>
    </div>
    <div class="content">
      <div class="wrapper-form">
        <APIInputView />
      </div>
      <div class="wrapper-buttons">
        <ButtonsView />
        <ModalView />
        <FormSelect />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
    background: #1d1d1d;
    font-family: 'Poppins', sans-serif;
}

#app {
  margin: 20px;
  display: flex;
  flex-direction:column;
  .header {
    display: flex;
    .wrapper-stats {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .wrapper-form {
      width: 30%;
      color: #9f9f9f;
      border: 1px solid #9f9f9f;
      padding: 10px 20px;
      border-radius: 15px;
    }
  }

  .content {
    display: flex;
    width: 100%;
    margin: 20px;
    .wrapper-form {
      width: 40%;
    }
    .wrapper-buttons {
      width: 40%;
    }
  }

}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
</style>

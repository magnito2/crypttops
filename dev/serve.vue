<script>
// Uncomment import and local "components" registration if library is not registered globally.
import LeaderBoardView from './components/leader-board-view.vue'
import FormInputView from './components/form-input-view.vue'
import FormSubmitView from './components/form-submit-view.vue'
import FormTermsView from './components/form-terms-view.vue'
import APIInputView from './components/api-input-view.vue'
import ButtonsView from './components/buttons-view.vue'
import PersonalStatsView from './components/personal-stats-view.vue'

export default {
    name: "ServeDev",
    components: {
    LeaderBoardView,
    FormInputView,
    FormSubmitView,
    FormTermsView,
    APIInputView,
    ButtonsView,
    PersonalStatsView
}
}
</script>

<template>
  <div id="app">
    <div class="wrapper-stats">
      <PersonalStatsView />
    </div>
    <div class="wrapper-leader">
      <LeaderBoardView/>
    </div>
    <div class="wrapper-form">
      <FormInputView />
      <FormTermsView />
    </div>
    <div class="wrapper-form">
      <FormSubmitView />
    </div>
    <div class="wrapper-form">
      <APIInputView />
    </div>
    <div class="wrapper-buttons">
      <ButtonsView />
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
  .wrapper-leader {
    
  }
  .wrapper-form {
    width: 40%;
  }
}
</style>

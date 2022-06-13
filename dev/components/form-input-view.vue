<template>
  <div class="form-wrapper">
        <div class="form-input">
            <FormInput 
                v-model="username"
                placeholder="Your Prefered Username"
                type="text"
            />
        </div>
        <div class="form-input">
            <FormInput 
                v-model="email"
                placeholder="Your Prefered Email Address"
                type="email"
            />
        </div>
        <div class="form-input">
            <FormInput
                v-model="password" 
                type="password"
            />
        </div>
        <div class="form-input">
            <FormSelect 
                :options="options"
                v-model="fruit"
                defaultText="Your favorite fruit"
            />
        </div>
        <div class="form-input">
            <DatePicker
                v-model="ranDate"
            />
        </div>
  </div>
  <div class="test-output">
      <p>Username is : {{ username }} </p>
      <p>Email is : {{ email }} </p>
      <p>Password is : {{ password }} </p>
      <p>Fruit is : {{ fruit }}</p>
      <p>Random date : {{ ranDate }}</p>
  </div>
</template>

<script>
import { Input as FormInput, Select as FormSelect, DatePicker } from '../../src/lib-components/form-elements';

export default {
    components: {
        FormInput,
        FormSelect,
        DatePicker
    },
    data(){
        return {
            options: ['Banana', 'Orange', 'Watermellon'],
            username: 'magnito',
            email: '',
            password: '',
            fruit: 'Orange',
            ranDate: new Date().toISOString().substr(0, 10)
        }
    }
}
</script>

<style>

</style>
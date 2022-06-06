# Form Input
Use this input element to get info from the user in Signup and Login forms.
Fields included include username, email and password
You can customize the field by passing custom icon or change placeholder text 

## Usage

### 1. As a username input element
```js:no-v-pre
// 
<script>
import { FormInput } from '@magnito/crypttops-library';

export default {
    components: {
        FormInput
    }
}
</script>
<template>
    <div>
        <FormInput
            placeholder="Your Prefered Username"
            type="text"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-form-input-doc" />

### 2. As an email input element
```js:no-v-pre
// 
<script>

<template>
    <div>
        <FormInput
            placeholder="Your Prefered Email"
            type="email"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-form-input-doc2" />

### 3. As a password input element
```js:no-v-pre
// 
<script>

<template>
    <div>
        <FormInput
            placeholder="Your Prefered Password"
            type="password"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-form-input-doc3" />
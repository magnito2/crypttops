# API Input
Use this input element to get info from the user in API Key and API Secret fields.

## Usage

### 1. As a API Key Form
```js:no-v-pre
// 
<script>
import { APIInput } from '@magnito2/crypttops-library/formelements';

export default {
    components: {
        APIInput
    },
    data(){
        return {
            APIKey: ""
        }
    }
}
</script>
<template>
    <div>
        <APIInput
            type="key"
            v-model="APIKey"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-api-key-input-doc" />

### 2. As an API Secret element
```js:no-v-pre
// 
<script>

<template>
    <div>
        <APIInput
            type="secret"
            v-model="APISecret"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-api-secret-input-doc" />
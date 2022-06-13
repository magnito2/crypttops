# API Input
Use this input element to get info from the user in API Key and API Secret fields.

## Usage

### 1. As a API Key Form
```js:no-v-pre
// 
<script>
import { APIInput } from '@magnito/crypttops-library/formelements';

export default {
    components: {
        APIInput
    }
}
</script>
<template>
    <div>
        <APIInput
            type="key"
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
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-api-secret-input-doc" />
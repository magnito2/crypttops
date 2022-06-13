# Input
Select Field

#### Preview
<Demo componentName="examples-form-select-doc" />

## Usage

```js:no-v-pre
// 
<script>
import { Select } from '@magnito/crypttops-library/formelements';

export default {
    components: {
        Select
    }
}
</script>
<template>
    <div>
        <Select
            :options="['Tier 0', 'Tier 1', 'Tier 2']"
            defaultText = "Select tier"
        >
    </div>
</template>
```
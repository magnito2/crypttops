# Datepicker Input
Use this a modified version of date picker. 
It uses a custom version of datepicker in place of the default one.

## Usage

```js:no-v-pre
// 
<script>
import { DatePicker2 } from '@magnito2/crypttops-library/formelements';

export default {
    components: {
        DatePicker2
    },
    data(){
        return {
            startDate: ""
        }
    }
}
</script>
<template>
    <div>
        <date-picker
            v-model="startDate"
        >
    </div>
</template>
```
#### Preview
<Demo componentName="examples-date-picker-2-doc" />
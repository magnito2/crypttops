# Medium Button
Medium sized button

## Preview

<Demo componentName="examples-medium-button-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { MediumButton } from '@magnito2/crypttops-library/buttons';

export default {
    methods: {
        clicked(){
            alert('You clicked me');
        }
    }
}
</script>
<template>
    <div>
        <MediumButton
            value="Join our LeaderBoard"
            :action="clicked"
        >
    </div>
</template>
```

## Props
- `value` - Text to be displayed on the button
- `action` - Action to be performed when the button is clicked
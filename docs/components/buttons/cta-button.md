# CTA Button
Call to action button

## Preview

<Demo componentName="examples-cta-button-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { CTAButton } from '@magnito2/crypttops-library';

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
        <CTAButton
            value="Join our LeaderBoard"
            :action="clicked"
        >
    </div>
</template>
```

## Props
- `value` - Text to be displayed on the button
- `action` - Action to be performed when the button is clicked
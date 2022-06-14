# Base Modal
Base component for creating modals.
Use this as a container for modals

## Preview

<Demo componentName="examples-modal-base-doc" />

## Usage
```js:no-v-pre
// 
<script>
import { ModalBase } from '@magnito2/crypttops-library/modals';

export default {
    components: { ModalBase },
    data(){
        return {
            showModal : false,
        }
    }
    methods: {
        toggleModal(){
            this.showModal = !this.showModal;
        },
        closeModal(){
            this.showModal = false;
        }
    }
}
</script>
<template>
    <div>
        <ModalBase v-if="showModal" :closeModal="closeModal" lightBg>
            <h2>Content to be shown in modal </h2>
        </ModalBase>
    </div>
</template>
```

## Props
- `showModal` - A bolean value what will display modal when true
- `closeModal` - A function that when called will close the modal
- `lightBg` - A boolean value to make the background color more transparent

## Note
A modal needs to be removed from the normal flow of the container, thus, the best place to 
insert it is before the `</body>` closing tag.
Thus, the modal should be located in the root component at the bottom, or in a `<Teleport>` 
vue element which references an element near the bottom of the page.
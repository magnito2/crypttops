import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Demo", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/Demo.vue"))),
      app.component("SourceCode", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/SourceCode.vue"))),
      app.component("examples-leader-board-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/leader-board-doc.vue")))
  },
}

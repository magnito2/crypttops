import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Demo", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/Demo.vue"))),
      app.component("SourceCode", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/SourceCode.vue"))),
      app.component("examples-api-key-input-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/api-key-input-doc.vue"))),
      app.component("examples-api-secret-input-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/api-secret-input-doc.vue"))),
      app.component("examples-cta-button-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/cta-button-doc.vue"))),
      app.component("examples-form-input-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/form-input-doc.vue"))),
      app.component("examples-form-input-doc2", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/form-input-doc2.vue"))),
      app.component("examples-form-input-doc3", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/form-input-doc3.vue"))),
      app.component("examples-leader-board-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/leader-board-doc.vue"))),
      app.component("examples-personal-stats-doc", defineAsyncComponent(() => import("C:/projects/vue-tut/crypt-comps/crypt/docs/.vuepress/components/examples/personal-stats-doc.vue")))
  },
}

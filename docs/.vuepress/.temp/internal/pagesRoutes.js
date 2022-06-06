import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-5d7259d4","/guide.html",{"title":"Getting Started"},["/guide","/guide.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-7ca469b7","/components/leader-board.html",{"title":"LeaderBoard"},["/components/leader-board","/components/leader-board.md"]],
  ["v-ab65d3f2","/components/personal-stats.html",{"title":"PersonalStats"},["/components/personal-stats","/components/personal-stats.md"]],
  ["v-1020f180","/components/",{"title":"Components"},["/components/index.html","/components/README.md"]],
  ["v-7e89780e","/components/buttons/",{"title":"CTA Button"},["/components/buttons/index.html","/components/buttons/README.md"]],
  ["v-40eae688","/components/inputs/api-input.html",{"title":"API Input"},["/components/inputs/api-input","/components/inputs/api-input.md"]],
  ["v-4de691dc","/components/inputs/form-input.html",{"title":"Form Input"},["/components/inputs/form-input","/components/inputs/form-input.md"]],
  ["v-38aa6c26","/components/inputs/",{"title":"Inputs Elements"},["/components/inputs/index.html","/components/inputs/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)

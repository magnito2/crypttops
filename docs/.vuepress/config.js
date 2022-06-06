// config.js
const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {

    base: '/crypttops/',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Crypttops Library 🥂',
        description: 'Documentation site for the Crypttops Vue component library plugin'
      }
    },
  
    theme: defaultTheme({
      repoLabel: 'Contribute!',
      // git repo here... gitlab, github
      docsDir: 'docs',
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          lastUpdated: 'Last Updated',
          // service worker is configured but will only register in production
          serviceWorker: {
            updatePopup: {
              message: 'New content is available.',
              buttonText: 'Refresh'
            }
          },
          nav: [
            { text: 'Getting Started', link: '/guide' },
            { text: 'Components', link: '/components/' },
            // external link to git repo...again
            { text: 'GitHub', link: '' }
          ],
          sidebar: {
            '/components/': [
              {
                title: 'Components',
                collapsable: false,
                children: [
                  { text: 'Leaderboard', link: '/components/leader-board'},
                  { text: 'Personalstats', link: '/components/personal-stats'}, 
                  { text: 'Buttons', link: '/components/buttons'}, 
                  { text: 'Inputs',
                    link: '/components/inputs',
                    collapsable: true,
                    children: [
                      { text: 'FormInputs', link: '/components/inputs/form-input'},
                      { text: 'APIInputs', link: '/components/inputs/api-input'}
                    ]
                  }
                ]
              }
            ]
          }
        }
      },
      navbar: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Components', link: '/components/README.md'}
      ]
    }),

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
  }
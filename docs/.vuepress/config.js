// config.js
const { path } = require('@vuepress/utils')
// const { defaultTheme } = require('@vuepress/theme-default')
const { localTheme } = require('./theme')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {

    base: '/crypttops/',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Crypttops Library',
        description: 'Documentation site for the Crypttops Vue component library plugin'
      }
    },
  
    theme: localTheme({
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
                  { text: 'Buttons', link: '/components/buttons',
                    children: [
                      { text: 'MediumButton', link: '/components/buttons/medium-button'},
                      { text: 'CTAButton', link: '/components/buttons/cta-button'},
                      { text: 'Pagination', link: '/components/buttons/pagination'}
                    ]
                  }, 
                  { text: 'Inputs',
                    link: '/components/inputs',
                    collapsable: true,
                    children: [
                      { text: 'Input', link: '/components/inputs/form-input'},
                      { text: 'APIInput', link: '/components/inputs/api-input'},
                      { text: 'Select', link: '/components/inputs/form-select'},
                      { text: 'Submit', link: '/components/inputs/form-submit'},
                      { text: 'Terms', link: '/components/inputs/form-terms'},
                      { text: 'Datepicker2', link: '/components/inputs/date-picker-2'}
                    ]
                  },
                  { text: 'Modals',
                    link: '/components/modals',
                    children: [
                      { text: 'ModalBase', link: '/components/modals/modal-base'},
                      { text: 'APIModal', link: '/components/modals/api-modal'},
                      { text: 'TierUpdateModal', link: '/components/modals/tier-update-modal'}
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
// config.js
const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
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
      repo: '',
      docsDir: 'docs',
      editLinks: true,
      docsBranch: 'dev',
      editLinkText: 'Help us improve this page!',
      search: false,
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
                children: ['leader-board']
              }
            ]
          }
        }
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
      ]
    }),

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
  }
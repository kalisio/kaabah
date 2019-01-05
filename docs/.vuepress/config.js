module.exports = {
  base: '/kaabah/',
  title: 'Kaabah',
  description: 'A Terraform solution to build and operate Docker Swarm infrastructures',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kaabah/kaabah-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: true,
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {
        text: 'What is it ?',
        link: '/what-is-it/',
      },
      {
        text: 'How doest it work ?',
        link: '/how-does-it-work/'
      },
      {
        text: 'How to use it ?',
        items: [
          { text: 'Getting started', link: '/how-to-use-it/getting-started.md' },
          { text: 'Advanced usage', link: '/how-to-use-it/advanced-usage.md' },
          { text: 'Configuration variables', link: '/how-to-use-it/configuration-variables' },
          { text: 'Helper commands', link: '/how-to-use-it/helper-commands.md'},
          { text: 'Tips', link: '/how-to-use-it/tips' }
        ]
      },
      {
        text: '   ?',
        items: [
          { text: 'GitHub', link: 'https://github.com/kalisio/kaabah' },
          { text: 'Contributing', link: '/CONTRIBUTING.md' },
          { text: 'License', link: '/LICENSE.md' }
        ]
      }
    ]
  }
}
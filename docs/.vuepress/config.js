module.exports = {
  base: '/kaabah/',
  title: 'Kaabah',
  description: 'A cloud agnostic solution to build and operate Docker Swarm infrastructures',
  head: [
    ['link', { rel: 'icon', href: `./icons/kalisio-logo-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
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
        link: '/how-to-use-it/'
      }
    ]
  }
}
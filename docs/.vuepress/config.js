module.exports = {
  base: '/kaabah/',
  title: 'Kaabah',
  description: 'A cloud agnostic solution to build and operate Docker Swarm infrastructures',
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
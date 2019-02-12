module.exports = {
  base: '/kaabah/',
  title: 'Kaabah',
  description: 'A Terraform solution to build and operate Docker Swarm infrastructures',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kaabah/kaabah-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: 'About', link: '/about/introduction' },
      { text: 'Guides', link: '/guides/understanding-kaabah' },
      { text: 'Reference', link: '/reference/configuration-variables' },
      { text: 'Tips', link: '/tips/' },
      { text: 'GitHub', link: 'https://github.com/kalisio/kaabah' }
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/guides/': getGuidesSidebar(),
      '/reference/': getReferenceSidebar(),
      '/tips/': getTipsSidebar()
    }
  }
}

function getAboutSidebar () {
  return [
    'introduction',
    'roadmap',
    'license',
    'contact'
  ] 
}

function getGuidesSidebar () {
  return [
    'understanding-kaabah',
    'getting-started',
    'advanced-usage'
  ]
}

function getReferenceSidebar () {
  return [
    'configuration-variables',
    'helper-commands'
  ]
}

function getTipsSidebar () {
  return [
    ''
  ]
}
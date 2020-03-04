/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8c28644ea206c2b6faa5cfd4b2b6fdce"
  },
  {
    "url": "about/contact.html",
    "revision": "2eaf445f6b5308d6ffa0d65655aca638"
  },
  {
    "url": "about/contributing.html",
    "revision": "39e5c638b89cb4258ecdbbf576c3753c"
  },
  {
    "url": "about/introduction.html",
    "revision": "9293bff0f5b8f4a9017e667b832eeec8"
  },
  {
    "url": "about/license.html",
    "revision": "075711d0bad8e4d1d1377095944ac5c4"
  },
  {
    "url": "about/roadmap.html",
    "revision": "6231f72a2044ae55fee523b040dfbdd0"
  },
  {
    "url": "assets/css/0.styles.0f2cf9a2.css",
    "revision": "7d4050a8b26d65e355dadeb7e2418c7b"
  },
  {
    "url": "assets/img/bastion-architecture.26f462e8.svg",
    "revision": "26f462e845d87d05a4f976b7c1f4a3cb"
  },
  {
    "url": "assets/img/kaabah-overview.e27bf66a.svg",
    "revision": "e27bf66ace08f58e366dd11c4aa8fb3c"
  },
  {
    "url": "assets/img/kaabah-principle.86122ac7.svg",
    "revision": "86122ac745e5c0172223788a78bb136d"
  },
  {
    "url": "assets/img/kaabah-swarm.9d28a804.svg",
    "revision": "9d28a804fc6bf91af24873a2eb64f862"
  },
  {
    "url": "assets/img/kaabah-terraform.99a18566.svg",
    "revision": "99a18566ab74c9bac7f3d828e75b987b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcb0f975.js",
    "revision": "66c8aeb876ce74fe15c45ffc12836205"
  },
  {
    "url": "assets/js/11.d8b84708.js",
    "revision": "80aef24ad5d95eb526bea0f89198af75"
  },
  {
    "url": "assets/js/12.9ad13950.js",
    "revision": "2a43e6c6905edb98eb506dffc70c5af3"
  },
  {
    "url": "assets/js/13.d0e642f7.js",
    "revision": "5023bf7075e9b7f8761ab2198609f3f1"
  },
  {
    "url": "assets/js/14.1b077a7b.js",
    "revision": "d0baf6e9c91cfcaeebc8b0a2d304801b"
  },
  {
    "url": "assets/js/15.14e9cc74.js",
    "revision": "5a3a768df148955f597ccaf5e5285f15"
  },
  {
    "url": "assets/js/16.c883fe3f.js",
    "revision": "afb8691765df28b5ed0a347f1b1499a7"
  },
  {
    "url": "assets/js/17.8f4f8ff6.js",
    "revision": "58257a20757063bbe08ebaa66cd1be19"
  },
  {
    "url": "assets/js/18.99656037.js",
    "revision": "cb5fe9a9cf152acc42917634e23a0bcc"
  },
  {
    "url": "assets/js/19.75d11d37.js",
    "revision": "081ab31607700b20b5f457c3ae658b60"
  },
  {
    "url": "assets/js/2.da9bf2e7.js",
    "revision": "56b2ed8a6dc536de51d9e87fe1c2b33a"
  },
  {
    "url": "assets/js/20.be9b511e.js",
    "revision": "0fb7fa69226d0b751978d0196f41564e"
  },
  {
    "url": "assets/js/21.73e3db49.js",
    "revision": "f7d101ed3647d0b0d6d01597c76a7202"
  },
  {
    "url": "assets/js/3.88c94f07.js",
    "revision": "53df1892dffe29941e65c13241265f83"
  },
  {
    "url": "assets/js/4.b53a1c54.js",
    "revision": "df4256117b0ec7acbfd0aa312003a99b"
  },
  {
    "url": "assets/js/5.d991a2a7.js",
    "revision": "f8cddc1e6e93c5cb98c299ab0c682e6d"
  },
  {
    "url": "assets/js/6.56dabbcc.js",
    "revision": "ab3ec7e97e35f80153b3efc6f2baf42f"
  },
  {
    "url": "assets/js/7.4acb4738.js",
    "revision": "81fecac44112e619b41004477d4d6fe9"
  },
  {
    "url": "assets/js/8.42672c33.js",
    "revision": "d18247e534fb8b8fc09079a37ab3afee"
  },
  {
    "url": "assets/js/9.d2a7d84c.js",
    "revision": "5fc5adf5dfca61f7eac19ead28ca4ab6"
  },
  {
    "url": "assets/js/app.03eb8b8d.js",
    "revision": "2381a1bc061fbdc551f428eeee23969f"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "dd0741961c85e463f74fe0f045818460"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "8bf0f4337962bef97ba0e4688694a589"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "cf68bcdc383c5a201144b6b5c6e481a1"
  },
  {
    "url": "index.html",
    "revision": "539a55a4417a22755af9328454029040"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "365325a300b97fed192cb664e737f160"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "4234f1e2050aaeebbe455fcf5ad2e8cc"
  },
  {
    "url": "tips/index.html",
    "revision": "04ecc94b3b448d80d8766a1275db228a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

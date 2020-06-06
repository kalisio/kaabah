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
    "revision": "4f358b44fa350d17dff041285baf3c72"
  },
  {
    "url": "about/contact.html",
    "revision": "8fced582d39033d35662b1eb24875456"
  },
  {
    "url": "about/contributing.html",
    "revision": "3851cd8763b26fedc9c00e2efed2ccb9"
  },
  {
    "url": "about/introduction.html",
    "revision": "4d853dffa50d4509566237cd76043b40"
  },
  {
    "url": "about/license.html",
    "revision": "d203c76f3509e2c7bf40567d1cb9e05b"
  },
  {
    "url": "about/roadmap.html",
    "revision": "eff8dec804d1757b6197a37d0249cc11"
  },
  {
    "url": "assets/css/0.styles.b0d4fd5f.css",
    "revision": "8187676b519b194bd3753d33a26eb532"
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
    "url": "assets/js/10.40e56d50.js",
    "revision": "5f7733d351c28a7698d893e6bd1892cf"
  },
  {
    "url": "assets/js/11.7958678a.js",
    "revision": "c59e2e9e4d768c2e26cd5ff1c78d22ab"
  },
  {
    "url": "assets/js/12.9f1d6e28.js",
    "revision": "e33aa7c1f0556b897693d31bb9305a02"
  },
  {
    "url": "assets/js/13.9497b030.js",
    "revision": "374c9db737e96751f1831bbcbb539b40"
  },
  {
    "url": "assets/js/14.b190d4c5.js",
    "revision": "f4d497989eadfc5571e7ea3d7506696f"
  },
  {
    "url": "assets/js/15.eb15e833.js",
    "revision": "2cff7855c2f516aeccd729c9080fa9e1"
  },
  {
    "url": "assets/js/16.fe3e0d30.js",
    "revision": "068b166115403984e4c5a9d50b267a2c"
  },
  {
    "url": "assets/js/17.0d26fb31.js",
    "revision": "583ca75b0ba0cbcdc8027ff234734a8b"
  },
  {
    "url": "assets/js/18.8e51c601.js",
    "revision": "8c4d4ca8f10b015ef030e314a7c82268"
  },
  {
    "url": "assets/js/19.41c94ec3.js",
    "revision": "e3da43ca2043f9f2eaec23c6f2362efe"
  },
  {
    "url": "assets/js/2.2139ee2f.js",
    "revision": "4e2c58309969368ce2f77f247f1e4765"
  },
  {
    "url": "assets/js/20.f70f6369.js",
    "revision": "7d9104c7cbf9e02966fe9d2c7f3df4a2"
  },
  {
    "url": "assets/js/21.b346781d.js",
    "revision": "50a005765384618d5c4b1509ee14349c"
  },
  {
    "url": "assets/js/3.11bcd106.js",
    "revision": "3f7a0f1b9ebcd762d95fc9acfb2fc80e"
  },
  {
    "url": "assets/js/4.2b991f4e.js",
    "revision": "d9a9033c3743adb363e75fc308a66448"
  },
  {
    "url": "assets/js/5.efa7bd31.js",
    "revision": "5234246ff011ea9da6f1c90dd303c991"
  },
  {
    "url": "assets/js/6.7e77b91e.js",
    "revision": "6ea3d71378cb755a7b8f14ad526297c6"
  },
  {
    "url": "assets/js/7.303a2da0.js",
    "revision": "17c44f4203b030366ce8470a375862bc"
  },
  {
    "url": "assets/js/8.8c0e916f.js",
    "revision": "9a2703f607035f863ef33d1f988b6cbc"
  },
  {
    "url": "assets/js/9.8ec0cb15.js",
    "revision": "58210b0b1e61b48546596e8f5ecc5d5a"
  },
  {
    "url": "assets/js/app.bbe8a3e3.js",
    "revision": "1898896fcd80bc0c85d146d26eecc56c"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "54879a4f26528378453ee7ec9723b1b5"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "95b623bfe439e4600ea1a5fb02ebd6f7"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "696ac913c308bb22d3ef674f88bd5516"
  },
  {
    "url": "index.html",
    "revision": "4923365780ca812acdbcb4ae75b68b1f"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "6c1d45aed98bd88452b1ea5caa36b66f"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "db1020cbbca48ce3828375dcd290cae9"
  },
  {
    "url": "tips/index.html",
    "revision": "72028c4bcb3bc1afce05f2b31552a970"
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

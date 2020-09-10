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
    "revision": "3fbbfa108c2392e0088a33757e959707"
  },
  {
    "url": "about/contact.html",
    "revision": "fba7cf43bc2649265734c4657ebaf28a"
  },
  {
    "url": "about/contributing.html",
    "revision": "ed8251092d818d61e810a63f5ac4cf61"
  },
  {
    "url": "about/introduction.html",
    "revision": "0c901899a993f6bd4f689ca11f6dfb0c"
  },
  {
    "url": "about/license.html",
    "revision": "82e0ee96e13f40d016bcf8aba3c1c707"
  },
  {
    "url": "about/roadmap.html",
    "revision": "67794d215d4f7265be6e23f72bf47137"
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
    "url": "assets/img/kaabah-gluster.d5523d58.svg",
    "revision": "d5523d58a58a4455c9f9dea3e0117c58"
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
    "url": "assets/js/10.112bcd60.js",
    "revision": "54932410c459aa6d91be241398119f7b"
  },
  {
    "url": "assets/js/11.87e00a46.js",
    "revision": "11bf39e257a8584bd5457f3cfb8ca99b"
  },
  {
    "url": "assets/js/12.2d819681.js",
    "revision": "b926d05ea48a4d1015c2e30d6b696a8d"
  },
  {
    "url": "assets/js/13.459f81d3.js",
    "revision": "d73131dd76d4425659fb99d3f08fce9d"
  },
  {
    "url": "assets/js/14.e3a94158.js",
    "revision": "49c7c3cddbaf2cd0effc9b5b44533b5d"
  },
  {
    "url": "assets/js/15.92bbd2d2.js",
    "revision": "cd31dbddce5a243c220dd36852d19ab8"
  },
  {
    "url": "assets/js/16.c69da47c.js",
    "revision": "9108b2c302c0adff2d403bb8dec00ea3"
  },
  {
    "url": "assets/js/17.a0b425d7.js",
    "revision": "0bb75eb74515f269b9161fcb526c2b95"
  },
  {
    "url": "assets/js/18.055f80ff.js",
    "revision": "f1ea122188a45ba1feabea68bfa49e6a"
  },
  {
    "url": "assets/js/19.a7d112c8.js",
    "revision": "6d77372ff799598233f21c25a99a1cb5"
  },
  {
    "url": "assets/js/2.6a11fb6b.js",
    "revision": "2a323876f18a0956f54775191904bc47"
  },
  {
    "url": "assets/js/20.da62500c.js",
    "revision": "63954034ed9c284d6f3116e105594625"
  },
  {
    "url": "assets/js/21.aa935c63.js",
    "revision": "28d38571ae827bf7ac6677feb716d0f8"
  },
  {
    "url": "assets/js/3.63682c88.js",
    "revision": "fea03782a6e00fb05c648113958e1cb6"
  },
  {
    "url": "assets/js/4.367b80b5.js",
    "revision": "5a71ba083646c03af944f7e6e4d2129e"
  },
  {
    "url": "assets/js/5.a834133b.js",
    "revision": "df373622a8f9eeeac3c5cf045f0d35b2"
  },
  {
    "url": "assets/js/6.d6514cc0.js",
    "revision": "312f93af5fe83df74682ccb493b0d1e4"
  },
  {
    "url": "assets/js/7.7abecc49.js",
    "revision": "5a162b7953608361705061791a5a0e63"
  },
  {
    "url": "assets/js/8.3048d396.js",
    "revision": "8add35562d4cb58d44a6b982b3c74118"
  },
  {
    "url": "assets/js/9.6a4d495c.js",
    "revision": "40fc1a1b751e589746a9d9d494e7e9ae"
  },
  {
    "url": "assets/js/app.365d6a4c.js",
    "revision": "fb729abe91394494ca6cab6f24086854"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "6421be78b47350518c40754712ea170d"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "c45259f0beb29100b07853223b65c2d4"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "e46fbf72e8b2a087496a98bcef8020bb"
  },
  {
    "url": "index.html",
    "revision": "c1e3ed0e2aca8e3f3702b17ecf999721"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "adffe9bfbfaaa2ff6e0f0a3735abccbf"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "14397caae021753ee4fd25f503ecf5ff"
  },
  {
    "url": "tips/index.html",
    "revision": "22804bc67a484092e571d4e96660e23e"
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

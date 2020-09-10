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
    "revision": "5e79fd989984c856354bc3471bcc39e9"
  },
  {
    "url": "about/contact.html",
    "revision": "33428eebc7e82e74b2ce9ec924ed9a0f"
  },
  {
    "url": "about/contributing.html",
    "revision": "cde4265e649e7e48e941f03e00e564d6"
  },
  {
    "url": "about/introduction.html",
    "revision": "1077891675e27564a36277e028444f47"
  },
  {
    "url": "about/license.html",
    "revision": "debf1e315f6b5091d2a5630a8d89e83d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "574f56f68186a1b0aeb75336f63ac2f4"
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
    "url": "assets/js/16.987076a9.js",
    "revision": "c9a9ddd3333a33dd3a921fed0859be91"
  },
  {
    "url": "assets/js/17.214f521a.js",
    "revision": "3bf4c813df2c477ebc3b22e31e502a2f"
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
    "url": "assets/js/app.e421a93e.js",
    "revision": "1902c35ab3c217fbebcd88d7d44520f1"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "5232f133f107459699b7124e5dbb8408"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "6d932cf28e404c795134a2a21cc3b736"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "b3e084c8a742bd421b6fb424095c19db"
  },
  {
    "url": "index.html",
    "revision": "2b5a754514b678f45c7b7efcecc7c6dc"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "c6911dd8d89db8704ab716f5edd64b2d"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "42766da39fdb4d2ffeb7c565db2ecac6"
  },
  {
    "url": "tips/index.html",
    "revision": "b7bb5c26f7995c8e330df7d75f4ae518"
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

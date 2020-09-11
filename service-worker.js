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
    "revision": "11727999bac39f44e47bc1f669da8ffc"
  },
  {
    "url": "about/contact.html",
    "revision": "d248b79639f8fa228dba737107fe6744"
  },
  {
    "url": "about/contributing.html",
    "revision": "66c1b90f4e3fe3030c6ae606d776d4ad"
  },
  {
    "url": "about/introduction.html",
    "revision": "df7e295570c9654a48e458d4add7b0e6"
  },
  {
    "url": "about/license.html",
    "revision": "cd2240c80b3d031ac058fd2b68a18fb5"
  },
  {
    "url": "about/roadmap.html",
    "revision": "748a77e51d7db1c1c6e8d4c4bc93a28d"
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
    "url": "assets/js/16.8a7a78ea.js",
    "revision": "1fb55c04ddc1a5e5a76f9444ee4ee492"
  },
  {
    "url": "assets/js/17.ee357a7e.js",
    "revision": "25f110a528d976925b0ed7c4a98bd3c5"
  },
  {
    "url": "assets/js/18.6fca33e8.js",
    "revision": "6ddad41aa76f92f841d9c9bf7555f64b"
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
    "url": "assets/js/3.e7e6d588.js",
    "revision": "f0485b6d06653f6935182eceb9c6997a"
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
    "url": "assets/js/app.1c4b86c7.js",
    "revision": "40c313fa64a25e74ff1998602ad29337"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8c9aaa66074b48aca1eb7e38ba011aae"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "0bd1c2445026f476be6b920b7f5505eb"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "362273e285bd8725ce7bd8526c8081c1"
  },
  {
    "url": "index.html",
    "revision": "515a8df3e853906a99399714d03e3871"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "d0437d567d50a1157c249acf330219c5"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "66b664791db8a22d8e029910f5d58c24"
  },
  {
    "url": "tips/index.html",
    "revision": "6d1fb8ccea6bb4cf72d0590a187caa77"
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

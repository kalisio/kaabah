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
    "revision": "0b2fd0c623c18f776995598ec92e2ee6"
  },
  {
    "url": "about/contact.html",
    "revision": "5a84f32d4722218d77678ac7c6604015"
  },
  {
    "url": "about/contributing.html",
    "revision": "d4ac91541e758bc2e534fd5be2cd4c33"
  },
  {
    "url": "about/introduction.html",
    "revision": "87284546ebeecec9d57685aff3e132a8"
  },
  {
    "url": "about/license.html",
    "revision": "a807d77c0eb4586c1807c7801d0e9df5"
  },
  {
    "url": "about/roadmap.html",
    "revision": "d5dd875aa3ad2a1cc558a6346d599f6d"
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
    "url": "assets/js/3.0ca0f555.js",
    "revision": "77243cc364786007670842e9c9ff44ec"
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
    "url": "assets/js/app.b54a57bf.js",
    "revision": "cc9a0262907ebc773d1b1647add093b4"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "0be2cc0e3d7cf84ff97933215510b0ea"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "6ef0815aaaff7077a4657c325a148c59"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "12f4d70c3d9204372101355628b712a4"
  },
  {
    "url": "index.html",
    "revision": "b4473b9241f4f5544579e0653e623fd8"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "5ff391352d581ae3d8cdf46fbfebb3aa"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "1a2be2bca734dc75207cb647e7c0f558"
  },
  {
    "url": "tips/index.html",
    "revision": "fc3b7b970efd0bbb433f7ce7f21859c7"
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

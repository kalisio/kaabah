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
    "revision": "8b332aa3473a4e8f40aaa09f388922c9"
  },
  {
    "url": "about/contact.html",
    "revision": "e667179c698d4ac989d221252a56f293"
  },
  {
    "url": "about/contributing.html",
    "revision": "968c01a747c09186847197fba8bde693"
  },
  {
    "url": "about/introduction.html",
    "revision": "0f681ec8f94d63f062e0a6bcd1e04b33"
  },
  {
    "url": "about/license.html",
    "revision": "b7596c509f609cac42001431ce7a9d07"
  },
  {
    "url": "about/roadmap.html",
    "revision": "c239d29109c68f3ff6464ac249b5f5eb"
  },
  {
    "url": "assets/css/0.styles.4b846d8a.css",
    "revision": "d199e5c102125a7cba6c2dbf6c8a1f8f"
  },
  {
    "url": "assets/img/kaabah-bastion.02afd837.svg",
    "revision": "02afd8375d885d6e0145c7ef90fdcf83"
  },
  {
    "url": "assets/img/kaabah-gluster.d015860b.svg",
    "revision": "d015860b3b8f0e5cc661f5be98658288"
  },
  {
    "url": "assets/img/kaabah-overview.bbd6d94d.svg",
    "revision": "bbd6d94dc92ddfc5793e70e6e4d31378"
  },
  {
    "url": "assets/img/kaabah-principle.cca0399c.svg",
    "revision": "cca0399c28af2dcf88a0abd4c8ff05f3"
  },
  {
    "url": "assets/img/kaabah-swarm.bd36259a.svg",
    "revision": "bd36259a03af2a5a4b0081bec2c3cb08"
  },
  {
    "url": "assets/img/kaabah-terraform.2b43f23c.svg",
    "revision": "2b43f23c55fabc257038af3f5b0871b6"
  },
  {
    "url": "assets/img/kaabah-topologies.0e3d60e1.svg",
    "revision": "0e3d60e1264df42818d6c98f68355d81"
  },
  {
    "url": "assets/img/kaabah-volumes.707343a6.svg",
    "revision": "707343a6fa30eb6a54c16acb0c0efd6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d11dd0a8.js",
    "revision": "3f6422ceb7ece45f8f70e1bd73adfbb0"
  },
  {
    "url": "assets/js/11.0ec78972.js",
    "revision": "cc730b2d93fdb8a42a0878e2de0418fa"
  },
  {
    "url": "assets/js/12.739e423f.js",
    "revision": "7e8712ac0dff15b3f78c16285ea0bdc6"
  },
  {
    "url": "assets/js/13.d2ad6e04.js",
    "revision": "0ea562914626bcde8ec5052ea29324f1"
  },
  {
    "url": "assets/js/14.3107135a.js",
    "revision": "187eba5a58836fbb151032592b7cb81a"
  },
  {
    "url": "assets/js/15.6cbf5067.js",
    "revision": "397a39cca02646fe743231c6e9160596"
  },
  {
    "url": "assets/js/16.01ffbca0.js",
    "revision": "dc268543ef6b32b581dad5d75c3191c1"
  },
  {
    "url": "assets/js/17.b80c195a.js",
    "revision": "174a83dc8399e2a1850884059be3bc45"
  },
  {
    "url": "assets/js/18.87557a18.js",
    "revision": "09e77930bbf26f1db103dc5ff4d482e6"
  },
  {
    "url": "assets/js/19.7927ffa6.js",
    "revision": "d1e6fe4ebe894d138e3650be88df0de3"
  },
  {
    "url": "assets/js/2.00303eab.js",
    "revision": "f8bdc45fc3bfe05301357a8ece19fe54"
  },
  {
    "url": "assets/js/20.e25240f2.js",
    "revision": "10accd147d26f5bcc110cf576ddc05b5"
  },
  {
    "url": "assets/js/21.df22e9c8.js",
    "revision": "e1c83e5038929608cb663e38aa9977ce"
  },
  {
    "url": "assets/js/22.8cde647d.js",
    "revision": "94748c9d8df3a67710192f823f4e2c16"
  },
  {
    "url": "assets/js/23.2775e367.js",
    "revision": "580ffc27fd3774a5da80de54a3ceca5b"
  },
  {
    "url": "assets/js/24.1d030764.js",
    "revision": "3778ce98cb30a98de12bb89d87e8b98c"
  },
  {
    "url": "assets/js/25.8fa323e0.js",
    "revision": "e7c0a886fdd200f8e7440f1e8ad9d8d8"
  },
  {
    "url": "assets/js/3.7150d2b3.js",
    "revision": "1114d28a6bb36ba654d75b1914b1df14"
  },
  {
    "url": "assets/js/4.1e7b0ab8.js",
    "revision": "178ecce0f4e803e6e34bff41554bda4a"
  },
  {
    "url": "assets/js/5.20442a19.js",
    "revision": "fa763b88355a97c95e011bca8888c088"
  },
  {
    "url": "assets/js/6.bf796999.js",
    "revision": "79109493ac79e8ce860458148af088bc"
  },
  {
    "url": "assets/js/7.fd3b48d6.js",
    "revision": "424669690efc306b5ad7cd1267491b03"
  },
  {
    "url": "assets/js/8.0e0d56b7.js",
    "revision": "e17198bbfef29f4f29d5d592560604b2"
  },
  {
    "url": "assets/js/9.5997cc58.js",
    "revision": "af334819f019f09b3486848b9caea815"
  },
  {
    "url": "assets/js/app.de0b551d.js",
    "revision": "8424b7c87bc1853ae12ea98d8dea3217"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "ffaf141ec007efdde5b0f48bca3e5d59"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "313c9e0a5ae27f855d3b4ddb1fdedffa"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "31f62d08f2530cb47530ab569f0e204a"
  },
  {
    "url": "index.html",
    "revision": "27389e0aac562407be965e61f75deb7e"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "e54eb3641d7f8c7d7bc2f2ce5250e8f3"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "ff3e07105f3fa49cadd14b8d79c60129"
  },
  {
    "url": "tips/index.html",
    "revision": "df3b4b90af959496315e9522053b2da6"
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

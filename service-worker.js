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
    "revision": "6879eeb17b16f141f1999fa7e12c8226"
  },
  {
    "url": "about/contact.html",
    "revision": "a1edef1da1823bf45dfbd0b503883cb7"
  },
  {
    "url": "about/contributing.html",
    "revision": "f7ecbe7fb94e3d40f8e177aaf039e825"
  },
  {
    "url": "about/introduction.html",
    "revision": "99068abd4eeccea8d1bf44819f56b962"
  },
  {
    "url": "about/license.html",
    "revision": "f8df19c234c190b5f7be82a5d59d3182"
  },
  {
    "url": "about/roadmap.html",
    "revision": "3b0099b463ad2a1dd03000627fa9f66f"
  },
  {
    "url": "assets/css/0.styles.0249d553.css",
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
    "url": "assets/js/10.d4e90857.js",
    "revision": "67e8d4856688243eceecf4c8adcb9cd8"
  },
  {
    "url": "assets/js/11.f32d2028.js",
    "revision": "1d15601d2b3f0f7ec33e72c56131832b"
  },
  {
    "url": "assets/js/12.6d05716c.js",
    "revision": "6fc37d2077018ae3a5a37a10439bd9aa"
  },
  {
    "url": "assets/js/13.6f33bb2f.js",
    "revision": "6b63dc059bf6261aea860b9b08c69f09"
  },
  {
    "url": "assets/js/14.e8458dae.js",
    "revision": "995560b4401ac2fe5930c767f59bda86"
  },
  {
    "url": "assets/js/15.6cbf5067.js",
    "revision": "397a39cca02646fe743231c6e9160596"
  },
  {
    "url": "assets/js/16.56f534b1.js",
    "revision": "57f84cdf9719c7fc1e1b9c3d07fa8e80"
  },
  {
    "url": "assets/js/17.e4b6d56a.js",
    "revision": "726ba14322c440e477e8df1661229194"
  },
  {
    "url": "assets/js/18.94b7f9d6.js",
    "revision": "ada6ae525340f05eb2b0a65e82401c3b"
  },
  {
    "url": "assets/js/19.904d4519.js",
    "revision": "dce5167b0b9b0a8b5f653f9c638a3ba0"
  },
  {
    "url": "assets/js/2.00303eab.js",
    "revision": "f8bdc45fc3bfe05301357a8ece19fe54"
  },
  {
    "url": "assets/js/20.121a4436.js",
    "revision": "4d8b1cdba532d9487571b4dcb4227250"
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
    "url": "assets/js/4.d1c0d273.js",
    "revision": "ee2fdb18840b491445e51b66218c1bea"
  },
  {
    "url": "assets/js/5.20442a19.js",
    "revision": "fa763b88355a97c95e011bca8888c088"
  },
  {
    "url": "assets/js/6.02a50bd2.js",
    "revision": "08dbbf344b7a3bab07ed565c30d6528f"
  },
  {
    "url": "assets/js/7.fd3b48d6.js",
    "revision": "424669690efc306b5ad7cd1267491b03"
  },
  {
    "url": "assets/js/8.793b5657.js",
    "revision": "7dac3eb3e23220b0c2731e5f62c77339"
  },
  {
    "url": "assets/js/9.d7c0939e.js",
    "revision": "438b305994415738c841a4f7524b87e4"
  },
  {
    "url": "assets/js/app.3a436345.js",
    "revision": "2cc5d22cfc76b57511688ff843bde818"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "6646ae031ec8e58d4ce2a1d015dcf3b0"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "ff9e1f0a617b21d8584b04352b72b3c9"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "7535d2260619ee3b2469ac255e99063c"
  },
  {
    "url": "index.html",
    "revision": "6156aae5dd97cac7f7f84919d69ea0df"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "61316b65ea18e17e9b72d0b767d199a5"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "cd204e122d5f9dec83565e0680961b28"
  },
  {
    "url": "tips/index.html",
    "revision": "80f6d3b4069a6f4efe18c69b4981fe65"
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

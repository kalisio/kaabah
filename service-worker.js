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
    "revision": "f87393cb01b9a6d4b5a0743f679208c3"
  },
  {
    "url": "about/contact.html",
    "revision": "39ea991feb122ef2f65f922c4e558c0f"
  },
  {
    "url": "about/contributing.html",
    "revision": "c467861fc4f9aac07658260d66d199ca"
  },
  {
    "url": "about/introduction.html",
    "revision": "6f92ff0cdc7f0d481d5fe1a5ba88fb20"
  },
  {
    "url": "about/license.html",
    "revision": "02dd3ce63e1268c1030078ee56b7e81a"
  },
  {
    "url": "about/roadmap.html",
    "revision": "25d6142df80c6dc06da3042989cbf025"
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
    "url": "assets/js/13.606be524.js",
    "revision": "476280be52eaf839165d9ef943ecd54d"
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
    "url": "assets/js/19.cd557d14.js",
    "revision": "1eb8ec94bd7efa9bfa9a81f665426196"
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
    "url": "assets/js/app.8c0e3a8e.js",
    "revision": "7d16a67139529fef895d0de3386f9856"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "9a1e39ec9d03f71f1054eb41cec4f2ce"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "6fd83f2a132ee92514042e45faab0d76"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "2f4774ed0e807db517adc9a6a4708d70"
  },
  {
    "url": "index.html",
    "revision": "6d8395cd0b0d3ab48d83e4b8891cc8ae"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "d27605710172baa4622cbf1458e73536"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "bddcb9e2050aea7117afbb070aca71a4"
  },
  {
    "url": "tips/index.html",
    "revision": "9ea5f54d13ac3cad9a6bf4bb5ee6beb2"
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

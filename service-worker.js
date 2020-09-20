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
    "revision": "767f75fa1ffd87a46a7352653edf75be"
  },
  {
    "url": "about/contact.html",
    "revision": "cc8e6b4f4deda1bc5e1aabae00c0d869"
  },
  {
    "url": "about/contributing.html",
    "revision": "b84e82de1b777929bd626c7dbe8fb548"
  },
  {
    "url": "about/introduction.html",
    "revision": "909c297d5312ed0fb74d3efc9dcd0403"
  },
  {
    "url": "about/license.html",
    "revision": "8e3b92c185b03d3d8c36e004bbb507ea"
  },
  {
    "url": "about/roadmap.html",
    "revision": "d1f0ff79a97f3d4308e52cceaebc701b"
  },
  {
    "url": "assets/css/0.styles.b0d4fd5f.css",
    "revision": "8187676b519b194bd3753d33a26eb532"
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
    "url": "assets/img/kaabah-volumes.707343a6.svg",
    "revision": "707343a6fa30eb6a54c16acb0c0efd6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2540251a.js",
    "revision": "04813c3dbca06e2e48287a06d8b08039"
  },
  {
    "url": "assets/js/11.e2ee213a.js",
    "revision": "58c64c74f44368963fe30698a8070ad4"
  },
  {
    "url": "assets/js/12.e5f6dd24.js",
    "revision": "a92ddff03bf065bf55ef6733ff8de511"
  },
  {
    "url": "assets/js/13.15c2ffa5.js",
    "revision": "b7b509f29aaab3f387565af9a3c6b965"
  },
  {
    "url": "assets/js/14.57fdc616.js",
    "revision": "b7a6d1178cb0f86ba15f5221b686c670"
  },
  {
    "url": "assets/js/15.7f2c0c04.js",
    "revision": "87617a989c36bb0d62c5a1191bbdc023"
  },
  {
    "url": "assets/js/16.6b49e13e.js",
    "revision": "6366b40c08c9ccf9b46f27f99d2261cf"
  },
  {
    "url": "assets/js/17.5545d614.js",
    "revision": "e56c29281685e60ebd610ddc85a89089"
  },
  {
    "url": "assets/js/18.2de2dc44.js",
    "revision": "5440da64d423da485a5642931a01fc35"
  },
  {
    "url": "assets/js/19.6d0a3115.js",
    "revision": "5b078b7ebb966ae5e8a67861b5dc5575"
  },
  {
    "url": "assets/js/2.8f18f075.js",
    "revision": "540653d04fe47091911376863b138b9a"
  },
  {
    "url": "assets/js/20.46e19d77.js",
    "revision": "8093b8a1412bfdf94bd762829f06872e"
  },
  {
    "url": "assets/js/21.c621e489.js",
    "revision": "1a60b9bc9d11cbaba089da4c718e7ee9"
  },
  {
    "url": "assets/js/3.a4cbd2e4.js",
    "revision": "2bf7259f725a30c69ddfc600fbdcb13b"
  },
  {
    "url": "assets/js/4.13f7fdb6.js",
    "revision": "6d014264a90ad7129b52d997b360ae49"
  },
  {
    "url": "assets/js/5.c21d6619.js",
    "revision": "ba3b721e7199db2177d31990f606bacf"
  },
  {
    "url": "assets/js/6.56173d71.js",
    "revision": "09cad6f3f9d0a8974a70f1c327181cde"
  },
  {
    "url": "assets/js/7.9f99aadb.js",
    "revision": "99a98279b49fd67a626d598bca642430"
  },
  {
    "url": "assets/js/8.68199981.js",
    "revision": "2461a4eae26c87be4bec6f9ed1f17200"
  },
  {
    "url": "assets/js/9.0a62e98c.js",
    "revision": "8e2f5623e14a0d53de1b4285fb8fb522"
  },
  {
    "url": "assets/js/app.49423da1.js",
    "revision": "e58e3c2c8356998378e7bba01d62d0a1"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "2cc71f11c687e05791eda897d1a3f745"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "b3aa88171c0663ae4975f24f7f4f168c"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "c1245aef629df347043ff97d6727a9f1"
  },
  {
    "url": "index.html",
    "revision": "7a025a57365ff7ff87d002db6fc4b2a8"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "051c563c7d841eade0592e56c9d757c7"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "c4df2c1c1f7fe223dedd8b3f5300328b"
  },
  {
    "url": "tips/index.html",
    "revision": "344a9104a200f712149dc79d10f8eec0"
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

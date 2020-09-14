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
    "revision": "a8771376c470a4b0c9c0aba753cd9ba2"
  },
  {
    "url": "about/contact.html",
    "revision": "bebde7f083acb380ac3fdb3d5eaad7a3"
  },
  {
    "url": "about/contributing.html",
    "revision": "96a018231876c306389ff546c71ef4d4"
  },
  {
    "url": "about/introduction.html",
    "revision": "b67fd6fedf3bbfdeb97623feca49dc23"
  },
  {
    "url": "about/license.html",
    "revision": "cf0ae0d976eaef47e6d847b38deab8b6"
  },
  {
    "url": "about/roadmap.html",
    "revision": "297b63b18b737e7e8a4690692bd968fc"
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
    "url": "assets/js/15.568408fc.js",
    "revision": "1ed9279e62924fa6a9e3a71e0c167940"
  },
  {
    "url": "assets/js/16.b3430e2c.js",
    "revision": "f7cd743e24c572cd07aa50152bb95884"
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
    "url": "assets/js/3.81095ce9.js",
    "revision": "ee58677a3680b302e34de21d497ca56b"
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
    "url": "assets/js/6.e0c815dc.js",
    "revision": "e139c07c72deccfe05bc8ed6209fc11b"
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
    "url": "assets/js/app.3b00340e.js",
    "revision": "ca336af0d9659f66b60fe20874cbbd8a"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "ab4ae900311971a2729e112dafca925f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "ca61b8a78eb7e7f350ee1299e08a2c53"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "8c162aac30ff200f6badbcd9093104f1"
  },
  {
    "url": "index.html",
    "revision": "121b38f27e5c6d8bb74d8161614cdc7a"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "bf1ef13a8728f65eb3e331985d7ed2d3"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "e3d4c5b0a86ff06d7820bf4883d72ccb"
  },
  {
    "url": "tips/index.html",
    "revision": "01cfdc56132aa565224f70168f40d01e"
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

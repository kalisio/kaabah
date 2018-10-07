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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0553a7e48b49b88e3027aaa58ce9eadd"
  },
  {
    "url": "assets/css/0.styles.8280e1ab.css",
    "revision": "f43b5946ff4cc02bc40bf3e9906733b3"
  },
  {
    "url": "assets/img/kaabah-overview.74a01c42.svg",
    "revision": "74a01c42f4bb848d1bf4e6d2f0ae0b4e"
  },
  {
    "url": "assets/img/kaabah-swarm.d67d6932.svg",
    "revision": "d67d6932d2eadf22716ac6ed7866033e"
  },
  {
    "url": "assets/img/kaabah-terraform.555a6e18.svg",
    "revision": "555a6e1874a33aa44d51fdb799ff8d10"
  },
  {
    "url": "assets/img/kaabah-traefik.96292850.svg",
    "revision": "96292850fde5e2c3e334b02f22d41661"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6e12a5c.js",
    "revision": "a142404398e50becf8709d44b421f873"
  },
  {
    "url": "assets/js/11.a86dbc32.js",
    "revision": "dc765ea51a0dd413d0e8689e3048c590"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.f991aea9.js",
    "revision": "6083ae7d8abee468198511b8b0d03c3f"
  },
  {
    "url": "assets/js/4.7dfe1e17.js",
    "revision": "c0c4ec727c2e9431aaf7f721d9f70bd7"
  },
  {
    "url": "assets/js/5.1520fa4f.js",
    "revision": "dc23fb1113b2fb9d72a3735b75ff63a9"
  },
  {
    "url": "assets/js/6.a85bfd0e.js",
    "revision": "aaae913e63bff52a7cafb0cfff2d1821"
  },
  {
    "url": "assets/js/7.d296dba8.js",
    "revision": "af99ab0982143093a3850ceb062e9efe"
  },
  {
    "url": "assets/js/8.c463f89d.js",
    "revision": "d45360e4e7b5c56796de0440f2dcd1e7"
  },
  {
    "url": "assets/js/9.b8feea15.js",
    "revision": "d853320a1a9564eb787f6600ba78ccd6"
  },
  {
    "url": "assets/js/app.bff4e761.js",
    "revision": "eb737400a99e2f4bf06a41857f71d36a"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "df6959984c9391ecdc30820cf9b69013"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "231a3dadd6a47857f5a4efa583b330d1"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "0c05365f50e25c9f0e7acae762b56667"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "d43497a9183b1c60f8536c073f50202f"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "0555cf576db69bdb04e5bb28da780988"
  },
  {
    "url": "index.html",
    "revision": "c1756dd64b49429a0c1062025aebad5d"
  },
  {
    "url": "LICENSE.html",
    "revision": "4a805f23e8725240d2755f487298a017"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "36179596c17ca55cdb351b2d3c1b3d84"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

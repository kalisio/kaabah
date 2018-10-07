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
    "revision": "29a323542eae609ce25ae7c8a9f5dca2"
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
    "url": "assets/js/app.1bf5155f.js",
    "revision": "57a7635aedc5015a2fd9ba2aa4e81840"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "7af2b04d9d1a365023470fbc5fe645cd"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "74cab034050a7f104595e85bed52e44e"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "51593dc814f90fc1a219fc1d1f109fb6"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "cb9dfcf4fe391de1cea82ea37890b506"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "cc293fa7a10524509980801734a58d0d"
  },
  {
    "url": "index.html",
    "revision": "2bb27683fbc5a557e94c1abc0beefb0d"
  },
  {
    "url": "LICENSE.html",
    "revision": "c614c39ef2d1d73745dd6da16ae58523"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "3ec82cbb0ad065c6addb7cb6d6ef88fe"
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

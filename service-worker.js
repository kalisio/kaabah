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
    "revision": "ae52db7a54b220ddbbbbabf28153c123"
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
    "url": "assets/js/7.6a49b375.js",
    "revision": "fa922be87094e9a439821602dec2ae80"
  },
  {
    "url": "assets/js/8.8b18e821.js",
    "revision": "bf7a450f75777f215a3972a0278448cf"
  },
  {
    "url": "assets/js/9.c92f4c60.js",
    "revision": "5a730e4c18d89e94b5595974a4cd580c"
  },
  {
    "url": "assets/js/app.2e7fa27e.js",
    "revision": "ff0a3cfebf84a989f438b563c1157f9e"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "f259a0d5af3d1a739455236c3e3f9fe5"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "6240128e14ed303404dce35cbb2c4e34"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "1a918e9feac9d932425e28e9127322fa"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "47520cbd793ebff3b82117172794a43c"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "bbe83fe4ce1911dee5c4ce6924600267"
  },
  {
    "url": "index.html",
    "revision": "df519b46b44ee5b75cb273b755cac24d"
  },
  {
    "url": "LICENSE.html",
    "revision": "20536c62b018d39c4880ae07ca68784f"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "dcdbc8b9a94cd80116c8dfb803a393b4"
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

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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "abac1c17a5f62e640418173eb800a6b0"
  },
  {
    "url": "assets/css/5.styles.683aaab6.css",
    "revision": "fd7af715c26b8e0a09ed481a2911a455"
  },
  {
    "url": "assets/img/kaabah-overview.e8d8ef98.svg",
    "revision": "e8d8ef98228a9042bc7e673b680e0834"
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
    "url": "assets/js/0.7786dab3.js",
    "revision": "c991cf5531784414386e01ec3cf1b6dd"
  },
  {
    "url": "assets/js/1.78d94593.js",
    "revision": "e9491ce80f48637aef1f8c945b6d5d24"
  },
  {
    "url": "assets/js/2.78de9a3f.js",
    "revision": "0e75c415ab8974e6251dc61d7c224dc4"
  },
  {
    "url": "assets/js/3.aa0a540f.js",
    "revision": "176a5bc16f1bdfbfe718b65bba45fc1e"
  },
  {
    "url": "assets/js/4.1d6bf2ed.js",
    "revision": "bbffbb2c51787496e9fd75a6c62c40d9"
  },
  {
    "url": "assets/js/app.2952dbe5.js",
    "revision": "01cd307214e1addb8517f0e38fbe51c4"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "9d44415a6edce615e0e09eebb2e72bf3"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "13f6fce441ea9b9f81cd55edaf0109b1"
  },
  {
    "url": "images/kaabah-overview.svg",
    "revision": "e8d8ef98228a9042bc7e673b680e0834"
  },
  {
    "url": "images/kaabah-swarm.svg",
    "revision": "d67d6932d2eadf22716ac6ed7866033e"
  },
  {
    "url": "images/kaabah-terraform.svg",
    "revision": "555a6e1874a33aa44d51fdb799ff8d10"
  },
  {
    "url": "images/kaabah-traefik.svg",
    "revision": "96292850fde5e2c3e334b02f22d41661"
  },
  {
    "url": "images/kalisio-banner.png",
    "revision": "425849b00260b83ac5af89dac83bb4e3"
  },
  {
    "url": "index.html",
    "revision": "095730bfa8ecaede9c15b002fe0f1f74"
  },
  {
    "url": "README_old.html",
    "revision": "011b8a9af8d28cfc90fe2c9467892966"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "52a4de15c83d5d85e3d517b9315f18b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

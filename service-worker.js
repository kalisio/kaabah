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
    "revision": "f77b65aacf44c19e42e0a6a3a9dd51a7"
  },
  {
    "url": "assets/css/4.styles.913d8d1f.css",
    "revision": "78042c0e2949ba3d095491d85abe2502"
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
    "url": "assets/js/0.6b5180ce.js",
    "revision": "4337f71a61d05ed3f2c659ac4cd746d2"
  },
  {
    "url": "assets/js/1.ae160cda.js",
    "revision": "f02bd720b22da9ed406f76d1d1b7369f"
  },
  {
    "url": "assets/js/2.57a36524.js",
    "revision": "7f9559db105919a0afb06317f578ed79"
  },
  {
    "url": "assets/js/3.c843e869.js",
    "revision": "c99bea750efe1f63aa07373237b142bc"
  },
  {
    "url": "assets/js/app.8fd2a47a.js",
    "revision": "2e3d62c98cdfd51fa9a3db6ae3ed84f7"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "330e5ef2e0712313e342d57f27f060ea"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "6dccc3f4faacd3c399779439100db031"
  },
  {
    "url": "index.html",
    "revision": "86af6922616895bea6927872c09a6946"
  },
  {
    "url": "kalisio-logo-256x256.png",
    "revision": "5d8a749b1865a4a845fbaaab972dd315"
  },
  {
    "url": "kalisio-logo-512x512.png",
    "revision": "6f108455a9a95bca6278dfaa58eaa8ec"
  },
  {
    "url": "kalisio-logo-64x64.png",
    "revision": "2065682e5cd8f7ac0e1db3eec6f2078e"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "0ed0c4f3ecf08ad91f89cd7f1cd0d705"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

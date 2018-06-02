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
    "revision": "e78b82a7b4458807b70e0f9cc7e9d331"
  },
  {
    "url": "assets/css/4.styles.ef9ed187.css",
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
    "url": "assets/js/0.05e54168.js",
    "revision": "e7f47e32c3aec74292a66d76b8ec00b8"
  },
  {
    "url": "assets/js/1.8ec5a159.js",
    "revision": "c0e92b309ba70d097091ce414489d955"
  },
  {
    "url": "assets/js/2.d8ff2718.js",
    "revision": "2a53ab427671189629e7216da80dde7a"
  },
  {
    "url": "assets/js/3.12f2e866.js",
    "revision": "fe4c42714e7645e89c5af1eb2fa6eac6"
  },
  {
    "url": "assets/js/app.fb9ba115.js",
    "revision": "06d95e7048332a9b89d7521c87024fa4"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "ba78d9fb5235a07f0b6f4a02c8bcf41a"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "5d67791a91fee2ca3471133e7494659b"
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
    "revision": "2bc4b77ecda1fb5d49577b3413f29be3"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "be7b5050a4a2f7015dc3a196ef110c3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

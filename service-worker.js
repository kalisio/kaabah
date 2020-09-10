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
    "revision": "4669614b34b32e26fc1972e0a82ac3d9"
  },
  {
    "url": "about/contact.html",
    "revision": "7241a5bb5f5e6256cf25a5f815fa1356"
  },
  {
    "url": "about/contributing.html",
    "revision": "dacddb54037c534f8aa304691a488f5f"
  },
  {
    "url": "about/introduction.html",
    "revision": "8d423c48fbb720634b290736c7ab1d4d"
  },
  {
    "url": "about/license.html",
    "revision": "70711f9b385e97bb46f87dd30449eaab"
  },
  {
    "url": "about/roadmap.html",
    "revision": "7fc61a730b915f8b1fc6b016544e03fd"
  },
  {
    "url": "assets/css/0.styles.b0d4fd5f.css",
    "revision": "8187676b519b194bd3753d33a26eb532"
  },
  {
    "url": "assets/img/bastion-architecture.26f462e8.svg",
    "revision": "26f462e845d87d05a4f976b7c1f4a3cb"
  },
  {
    "url": "assets/img/kaabah-overview.e27bf66a.svg",
    "revision": "e27bf66ace08f58e366dd11c4aa8fb3c"
  },
  {
    "url": "assets/img/kaabah-principle.86122ac7.svg",
    "revision": "86122ac745e5c0172223788a78bb136d"
  },
  {
    "url": "assets/img/kaabah-swarm.9d28a804.svg",
    "revision": "9d28a804fc6bf91af24873a2eb64f862"
  },
  {
    "url": "assets/img/kaabah-terraform.99a18566.svg",
    "revision": "99a18566ab74c9bac7f3d828e75b987b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0b4395e5.js",
    "revision": "9c8bcb015b9b0c15370da9f0f4d621c6"
  },
  {
    "url": "assets/js/11.9e44ffb8.js",
    "revision": "ffc1f440f76f6e05730d923b8e5f0071"
  },
  {
    "url": "assets/js/12.18298fb8.js",
    "revision": "078aeb952d6e7d06f7db8c7f32eb962b"
  },
  {
    "url": "assets/js/13.694878c4.js",
    "revision": "ad058541d4eca8df549a4f6013790bf9"
  },
  {
    "url": "assets/js/14.02b009c4.js",
    "revision": "b9fb6873eaec24777e080e80d222eefe"
  },
  {
    "url": "assets/js/15.cac2f1ef.js",
    "revision": "f505431518d5dd9c976994845a778fad"
  },
  {
    "url": "assets/js/16.2b6a3dde.js",
    "revision": "111911214d1dd5de0870055b0ae0ed2a"
  },
  {
    "url": "assets/js/17.eaa7944b.js",
    "revision": "0b8ebe50d091e09280b9c89213c2014d"
  },
  {
    "url": "assets/js/18.96bee264.js",
    "revision": "1baa5701e82de640f8c8e4315ec2c797"
  },
  {
    "url": "assets/js/19.8705ea01.js",
    "revision": "42045e973d486ede76e6884405318623"
  },
  {
    "url": "assets/js/2.86e28b2f.js",
    "revision": "c64b4bc0d6f353e5c66c894dd9de836f"
  },
  {
    "url": "assets/js/20.5762d6b4.js",
    "revision": "3c69f39112ed45cef370bd8632e80ba9"
  },
  {
    "url": "assets/js/21.ecb437b0.js",
    "revision": "cfa54793b444002820ab74ed870cbc88"
  },
  {
    "url": "assets/js/3.11c6b2b6.js",
    "revision": "5c42f980fa814e1509b3904a535537d4"
  },
  {
    "url": "assets/js/4.c15a462f.js",
    "revision": "9eae9fbd73d40c047b0c819533f22bc0"
  },
  {
    "url": "assets/js/5.d1fcc5a4.js",
    "revision": "96a2cf90a5ba3ebee8c9c4465c4abfd0"
  },
  {
    "url": "assets/js/6.a0573bff.js",
    "revision": "fb56973216059df2e7ecdb5e7885eb3c"
  },
  {
    "url": "assets/js/7.c6d136ee.js",
    "revision": "813570e04304b4e6d9c3da0494d9c8d2"
  },
  {
    "url": "assets/js/8.59681b3d.js",
    "revision": "e32010e6919d0830a0980c51142b8f95"
  },
  {
    "url": "assets/js/9.f48a3aa1.js",
    "revision": "d1f4e47d5fd647e93c1afea663b0f2a1"
  },
  {
    "url": "assets/js/app.e1934932.js",
    "revision": "5049f81045ae8bfe6540ff1aa17ecf81"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "00f6e875f43a94dca9f38ccb2faefc26"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "36822a1fcb08d516603e154ccd9083ce"
  },
  {
    "url": "guides/understanding-kaabah.html",
    "revision": "82e18ce210aa45de742cc5b24e50be36"
  },
  {
    "url": "index.html",
    "revision": "decd8e8697a56f77f688e87656ead2a2"
  },
  {
    "url": "reference/configuration-variables.html",
    "revision": "db28c0dc7f8d24117bf30b39d75c727a"
  },
  {
    "url": "reference/helper-commands.html",
    "revision": "6ea0b720c71f9e89ba59a1abb8200cdb"
  },
  {
    "url": "tips/index.html",
    "revision": "63a0363f8da31455e51105a01284619f"
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

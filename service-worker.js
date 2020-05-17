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
    "revision": "1ad757935592a252191ac6050db39b09"
  },
  {
    "url": "api/cli.html",
    "revision": "7a58cf3493829b4b2e951d491b2ff2ea"
  },
  {
    "url": "api/node.html",
    "revision": "dfa66aae9616f1d987fa8f9dc9ecda9f"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.a91b8953.css",
    "revision": "4d7d1b0309d3902a29d3b74072974919"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.06491533.js",
    "revision": "026d5c62c3bd21135a3d8676a8883814"
  },
  {
    "url": "assets/js/11.0948f71c.js",
    "revision": "3ad0194a2a12f33010fe1f82f547ba3d"
  },
  {
    "url": "assets/js/12.048d0ea6.js",
    "revision": "fcbd059ee1ffe815fb7d9f372f145004"
  },
  {
    "url": "assets/js/13.30bc97a4.js",
    "revision": "8a731a828ca8330a67483570107f625b"
  },
  {
    "url": "assets/js/14.73434007.js",
    "revision": "b2b5bbdcacf7561c0cd5ff58d16d7a66"
  },
  {
    "url": "assets/js/15.b12c7284.js",
    "revision": "57b59a3de55533897d896d9e887a689b"
  },
  {
    "url": "assets/js/16.ff8c7caa.js",
    "revision": "2adade1e45d9e1f3a3b1010f5af5159c"
  },
  {
    "url": "assets/js/17.9ca607c4.js",
    "revision": "8e91d46adc391ac57ab635f50680ad30"
  },
  {
    "url": "assets/js/18.36b74500.js",
    "revision": "cfe81eca8d412d736b39490334654065"
  },
  {
    "url": "assets/js/19.dbd1e120.js",
    "revision": "31429316496c2af146e296aaf0df4283"
  },
  {
    "url": "assets/js/20.8c3bdd48.js",
    "revision": "366ee98de7cdc689c7ec93cee647cdcb"
  },
  {
    "url": "assets/js/21.438e6de2.js",
    "revision": "5e2e6836bda3dcbba7bb84a2834acd5d"
  },
  {
    "url": "assets/js/22.3de7a7a3.js",
    "revision": "360c277dcfd751b3e2d585f9a869aba9"
  },
  {
    "url": "assets/js/23.1700c90c.js",
    "revision": "fea64fb937a2ae8fa530712ea08f33da"
  },
  {
    "url": "assets/js/24.ba08da85.js",
    "revision": "23d008f3fbc75cb5c0944a73e39c9a6b"
  },
  {
    "url": "assets/js/25.5b7670e8.js",
    "revision": "b42fc38fc468187790e5b0786a637f4d"
  },
  {
    "url": "assets/js/26.86dc9e15.js",
    "revision": "1fb02aa5095a332384f94fd056969cc8"
  },
  {
    "url": "assets/js/27.dc2af0f3.js",
    "revision": "862409d2c1bca8fc283338e8e2effa81"
  },
  {
    "url": "assets/js/28.6464efec.js",
    "revision": "f88558d59291bb6d7272e1a2d0a30bc6"
  },
  {
    "url": "assets/js/29.4e8f2933.js",
    "revision": "e5c836898e594c53ba988a7896fe77b8"
  },
  {
    "url": "assets/js/30.a3054f81.js",
    "revision": "71d840d7b73a21cb9bbcda7bee8001eb"
  },
  {
    "url": "assets/js/31.18ebf416.js",
    "revision": "d2128c170085d7b2b90e1f20cdc3d6c4"
  },
  {
    "url": "assets/js/32.70c54286.js",
    "revision": "d9a404b5468ee2c6448940252b916067"
  },
  {
    "url": "assets/js/33.2c46b55e.js",
    "revision": "1ba3e0fdac440e0479d7df0a1ab53b71"
  },
  {
    "url": "assets/js/34.ecaf1c41.js",
    "revision": "eec66c4f4ebe5628ac9ffb82ebc93905"
  },
  {
    "url": "assets/js/35.c5800de3.js",
    "revision": "529dc42efc93bda7e82358952d31f484"
  },
  {
    "url": "assets/js/36.d6b154c1.js",
    "revision": "7c6c07539b67b150a239c8fe04a8f9c4"
  },
  {
    "url": "assets/js/37.ed139b46.js",
    "revision": "c046e177dad8a5c7c489bd63c18cfb1a"
  },
  {
    "url": "assets/js/38.8a876678.js",
    "revision": "1a4ed8a700eb061d5ae2bfcd824ad969"
  },
  {
    "url": "assets/js/39.d4c597bd.js",
    "revision": "7b2dc5b9988c579e9dbf8d81c7e30884"
  },
  {
    "url": "assets/js/4.12d145c0.js",
    "revision": "91743e141dc834c259c2739c2b9b4d71"
  },
  {
    "url": "assets/js/40.97a92107.js",
    "revision": "a7946a1b3c8bf4a49772f0b761331c0f"
  },
  {
    "url": "assets/js/41.35f5ef31.js",
    "revision": "2f0d276417b4530aedc1ca7b3912c419"
  },
  {
    "url": "assets/js/42.02419ec6.js",
    "revision": "daa27c92a2b21725d570d7e791e7495f"
  },
  {
    "url": "assets/js/43.5118c0b2.js",
    "revision": "4ad7ff91a7b691b54cb07787c70df4a3"
  },
  {
    "url": "assets/js/44.0c09a9e2.js",
    "revision": "116f10645f139df5c85311f7246e0857"
  },
  {
    "url": "assets/js/45.69fb7a77.js",
    "revision": "2f71eba946d55c7901e5b8ee51aaeb76"
  },
  {
    "url": "assets/js/46.d4102396.js",
    "revision": "4f342cba8496bde1de73e9f8840f256b"
  },
  {
    "url": "assets/js/47.0a2e02cf.js",
    "revision": "4580c217b16d2f76b192b63d619ea0e6"
  },
  {
    "url": "assets/js/48.ea6c45a8.js",
    "revision": "83dab4aa36fbac3e634e95beb56e8849"
  },
  {
    "url": "assets/js/49.001eebb2.js",
    "revision": "7e7d2fb6c642ae8453e851458218c48d"
  },
  {
    "url": "assets/js/5.7bbd0b44.js",
    "revision": "1f9d28835d0d24b68e51625066496590"
  },
  {
    "url": "assets/js/50.6a0bc1a0.js",
    "revision": "50b1cb627e7131ab873580d56e8cfe90"
  },
  {
    "url": "assets/js/51.c5b79c7b.js",
    "revision": "fc3ded735a23256c9cc4326c5018424b"
  },
  {
    "url": "assets/js/52.0199c440.js",
    "revision": "b1cfbe7dbdba446ff465675bb764ab68"
  },
  {
    "url": "assets/js/53.9f2c6a72.js",
    "revision": "bb8a08184cecef1f3c9ca50ded536a04"
  },
  {
    "url": "assets/js/54.edd1c6d8.js",
    "revision": "c1dfc7f21c4dd464200329e51c1f229c"
  },
  {
    "url": "assets/js/55.56285e6d.js",
    "revision": "3e26cce03e40c4b010667e6053ab6cd1"
  },
  {
    "url": "assets/js/56.4ab5f984.js",
    "revision": "c7ce8bc59fe05050c9f24d239dbb946e"
  },
  {
    "url": "assets/js/57.d36b7786.js",
    "revision": "aedf8d423881e52d17be3cda84fa5f11"
  },
  {
    "url": "assets/js/58.57f6d6fd.js",
    "revision": "689c298e9971a360de357a9ad356d3ab"
  },
  {
    "url": "assets/js/59.6c6a90f3.js",
    "revision": "7255a234d885c2f543f0545da5cffcea"
  },
  {
    "url": "assets/js/6.63d12723.js",
    "revision": "88a5a75dbb3054711ff93aec77c54fa7"
  },
  {
    "url": "assets/js/60.09a330bb.js",
    "revision": "10d431913167c849d73e8454ac49fb63"
  },
  {
    "url": "assets/js/61.3c474d9f.js",
    "revision": "36c99d0e771317cbdb4838ce950d712e"
  },
  {
    "url": "assets/js/62.290f5535.js",
    "revision": "11401fd3a62e67eb1ca37e434645bd2d"
  },
  {
    "url": "assets/js/63.01baaef8.js",
    "revision": "9ade05c4b4a32b6378738c45d375f1e6"
  },
  {
    "url": "assets/js/64.e5a78811.js",
    "revision": "d5a88e48e232200b5501da2fa8ce9b9d"
  },
  {
    "url": "assets/js/65.a76399ca.js",
    "revision": "0f831163ca1370b17b2e1c1ef3e99027"
  },
  {
    "url": "assets/js/66.0cc1c37c.js",
    "revision": "cd983ae3b20efb21c562130e76dfb983"
  },
  {
    "url": "assets/js/67.dbdb131e.js",
    "revision": "3144db020365797b73fcbebf0a8be3ea"
  },
  {
    "url": "assets/js/68.7c6eed98.js",
    "revision": "005ec2a4d2bfe3ce53704282a7b5d56f"
  },
  {
    "url": "assets/js/69.712d440d.js",
    "revision": "c43d45cad30199e8343413709051da35"
  },
  {
    "url": "assets/js/7.aa24a31d.js",
    "revision": "357145396521047f7653db0d9653a0dd"
  },
  {
    "url": "assets/js/70.026b2eb0.js",
    "revision": "ad9ace3411e049b151aa5c1074a24f28"
  },
  {
    "url": "assets/js/71.f8931077.js",
    "revision": "f771f5953c48bae5354fce76e2191f3a"
  },
  {
    "url": "assets/js/72.88ad4e15.js",
    "revision": "497c89b4f757f784facf514447b459ce"
  },
  {
    "url": "assets/js/73.97f1039a.js",
    "revision": "c2c4bbbf9814c1223b373ce8ec0719ac"
  },
  {
    "url": "assets/js/74.a4d551e1.js",
    "revision": "e5cffba3a9444976043b8689ffa60c0f"
  },
  {
    "url": "assets/js/75.eecf0f24.js",
    "revision": "7e581579ee99cef6985c76807bf2a292"
  },
  {
    "url": "assets/js/76.0da03061.js",
    "revision": "369cb24d7ee342d093536ba3208b9dc3"
  },
  {
    "url": "assets/js/77.b4554244.js",
    "revision": "0d67addf88094bed6169d5158602fdec"
  },
  {
    "url": "assets/js/78.7dba25c1.js",
    "revision": "48656d89ae54943a7b06e6cd17922261"
  },
  {
    "url": "assets/js/79.3edbb039.js",
    "revision": "82308520a58c7d05fb21913e15eac69f"
  },
  {
    "url": "assets/js/8.f8bd86c0.js",
    "revision": "2b52bfec3bb547c5acd654aa02ecff25"
  },
  {
    "url": "assets/js/80.cdaf361e.js",
    "revision": "3e33403ba322c7d9abf5384efb9282d8"
  },
  {
    "url": "assets/js/81.9d0dff43.js",
    "revision": "a6d8c6750db7487594242bca46587b58"
  },
  {
    "url": "assets/js/82.2435b705.js",
    "revision": "ac964e157a142b263bd37e51c34ec838"
  },
  {
    "url": "assets/js/83.e61ca127.js",
    "revision": "97279aca15412b6664a70a6cda8d47bf"
  },
  {
    "url": "assets/js/84.11792db3.js",
    "revision": "3f7636c97e7a9016ba39d49de95487d5"
  },
  {
    "url": "assets/js/85.63bb124d.js",
    "revision": "79a7dfa7655b32c4455b77907421c2fa"
  },
  {
    "url": "assets/js/86.5969579a.js",
    "revision": "992869dc0c4c9e9388082b467e92ae42"
  },
  {
    "url": "assets/js/87.7ae176cf.js",
    "revision": "61ad441204358ae23e841e2aa96e192d"
  },
  {
    "url": "assets/js/88.2a1dc09d.js",
    "revision": "883b131bb887a030e241c6ba77d78214"
  },
  {
    "url": "assets/js/89.982b4803.js",
    "revision": "f0639c9ad3398889556eede742634746"
  },
  {
    "url": "assets/js/9.840e02a6.js",
    "revision": "4135b6cf43c1bcafc1462112c51abb5f"
  },
  {
    "url": "assets/js/app.acd4afce.js",
    "revision": "a1ad0621790122b99a7ad2a0125e4537"
  },
  {
    "url": "assets/js/vendors~flowchart.dcdbb0a5.js",
    "revision": "a8af24a92f56d0a3f6031406174c8b70"
  },
  {
    "url": "assets/js/vendors~notification.61da6191.js",
    "revision": "834b591e6797adbc375d0cfb718f7e55"
  },
  {
    "url": "config/index.html",
    "revision": "360405fb1ba158c62ee36081d94bd8fe"
  },
  {
    "url": "faq/index.html",
    "revision": "d62a2e2ca4b838e57a538ebdc7eb6cc7"
  },
  {
    "url": "guide/assets.html",
    "revision": "4347465148f0f5924c81a6f41ca4803e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7b91ee77df168e042589d9a9e6399e19"
  },
  {
    "url": "guide/deploy.html",
    "revision": "16de921933850d2b2144a3525108b005"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "da496afcf0fc10705f4aa7becc335ed8"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "0d9140b556c93227ecc9c6f42fb9b348"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d233ec966efd152d8607685415deaf47"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "31bb2ffb96035f33d930cbf05da7bec2"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f0c7d2b5edcb5c230406058b37314c91"
  },
  {
    "url": "guide/index.html",
    "revision": "2cd5030ca3292af707cf0844cc0079bf"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "10a71a024d5dc7d706d2e6983fae7c5a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "00663104dcfaa187d65266a937c7fa72"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "967c9b239b139a8dba93eef81a4eff91"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f5030bf8ffc0b57c7f1af06378070544"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a7d0b064d00b62d6ebffb78da2652ce1"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "7cd9f457bb06d6aafd32f8fa90511bc0"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "31029da7d90fdc392dd9935ab131c631"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "b220e3d1727becbb8ab361349b3b33d2"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "210131296348d65e30d1e7713c77f7a6"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "84bd7849b3db2fbba575d64fc08d6bba"
  },
  {
    "url": "plugin/index.html",
    "revision": "020114566075a56b66d8d892b9753274"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "c04a0d5d22965c4dd5160334b2dd6475"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "a8038af7c2cce4b6e0d3815b62fa2059"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "040afd65a8c8de3b537ccd4d426385ab"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "b104d48c9611b191aa396902abf4cfc1"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "4ec5ac6fa11cf018d103542782bcb0e6"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "ef8a5eb1396b8a31c5d5829dcbf2667a"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "0f8e9b53ccc130d32ca7ddf7b3a9fff0"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "f51dbd25ed21c9e45c7cf8273e3a0291"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "9113b45786beabe619823d9284dea37b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "fa0b9c25d3759f002092db66e279e687"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "4effdcbd6b71a2a738909f4da808c4ba"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "646d5239b0e51d9b3cec3f23db84283c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "5390498b7c0a64fe0c0d7628c334afd7"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "e1fb8112d9d6cf7227d177faae9245a6"
  },
  {
    "url": "zh/api/node.html",
    "revision": "4c3c909e7537b4d19965d4eda34dc16f"
  },
  {
    "url": "zh/config/index.html",
    "revision": "c2ff052a01038fc2e0dd1b027c557067"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "71a9b44d251dc77d843d6541710806b4"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "fd5e73608a91f9abedb543ca6d576926"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "beafa31c5e83e06966dfe7ab262e2029"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d7906f1be3c24e2c96855d5dde6d5929"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "2aa9e4775eae0ef7edfcfec17bf1eaa6"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "9cad66f508da634757ae98e775c0866a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "84970d34ee5b07568583dbd5145414fe"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "7254d672fb09bba9058ab729cefdb47b"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "4b0388e140cd18901be3bb199791f6ac"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a7f4029da40f71a1465083ad13bd49a8"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "143a845088bd22f9b584f69fb0e285b5"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "818ce14694fdf4a0fda3b2ededc3a5d6"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "a230b82941b4fadcb754bf8b1b628a8e"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "cd8a709fcde9cd5ffe4066b7ad4a2c21"
  },
  {
    "url": "zh/index.html",
    "revision": "3cde062b8e5d657a4f26b9dcf542c2fb"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "3b24f888987e5fb6873518b0b90dbb08"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "552d680a8c9c5ad8997ccb52f7ec2806"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "563222f440ba88f8e96c98b078830c45"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "1847033e81a5bc45543894722c70b392"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "f3c3913b547f2ab82c4774fc1a3dca50"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "154c8402d702e5e4c4e5455d4202f341"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "d2582f01d2a248a032c52c682c3eb0c9"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "2b1e30184e3a82a3d1ee3abbf8a5c516"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "54f4996378cd5f2f86111fe718546ebc"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "c16916fc1b4982d299940d5606d84782"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "e31e97824b3f2f95e4805bbc04371cf1"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "d981bfcae05868f1e9270018938f499d"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "e740f52fa52cab53d94b2e370ee91bff"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "c783465b23c319399cfb64bfd72f36b6"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "bf3e216a6f8cb55d0c99980b060bde1f"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "9cca2086a5e980020856881b3796ba9f"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "e96c2f3b0f2210fbceefda72d56fc740"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "0c2ed3b53f5822583e8b834cd4609d1a"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "460cc474c23cca176f5553354c9c5040"
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

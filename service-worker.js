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
    "revision": "f0ced7cef2f00e0ed0f82286d0e6333d"
  },
  {
    "url": "api/cli.html",
    "revision": "28d81fa2ca69b98be98fe254af662c45"
  },
  {
    "url": "api/node.html",
    "revision": "241e79bbadf72754874265d40a7f9cb8"
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
    "url": "assets/js/22.47969db1.js",
    "revision": "08a8f0e715740417033104fe401b4ec3"
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
    "url": "assets/js/25.1a8a2226.js",
    "revision": "8e4517862614485bd893c850547dc951"
  },
  {
    "url": "assets/js/26.6324bf44.js",
    "revision": "a827eaca49e8d0bdc1181f1eeb2ecf5f"
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
    "url": "assets/js/40.c3870b67.js",
    "revision": "43b07e241baedcfbc4df4be7d84a34d5"
  },
  {
    "url": "assets/js/41.9436fba4.js",
    "revision": "3f66ad66a577e3914d93b0d013a736b4"
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
    "url": "assets/js/51.fea56b44.js",
    "revision": "e4b7cdfa5ab7882239cb3dd95d44e594"
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
    "url": "assets/js/57.c11bdc6d.js",
    "revision": "38fcf5e1fb89fc23c04881b28fc527b7"
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
    "url": "assets/js/61.9bd50d9a.js",
    "revision": "967fc66777fb9567b078d7eccb32f59d"
  },
  {
    "url": "assets/js/62.079e719d.js",
    "revision": "06737bbada02b0b2ecb130cbfcdd09b8"
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
    "url": "assets/js/65.5610fc4d.js",
    "revision": "28a1b62e836e0d9880bf96f949875e8d"
  },
  {
    "url": "assets/js/66.c53c49cd.js",
    "revision": "8708fc52419a8c566d7eaa8662e0863e"
  },
  {
    "url": "assets/js/67.59e409b6.js",
    "revision": "f382602cbedd92f0434958e4212e0e9e"
  },
  {
    "url": "assets/js/68.cfcb0918.js",
    "revision": "8ea9041675e0e1494090cc6b68642586"
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
    "url": "assets/js/78.b9eafd4b.js",
    "revision": "d1e1cb5475d3f91d78bb63e0a3267a37"
  },
  {
    "url": "assets/js/79.420e85e9.js",
    "revision": "cebb381ad590507bac842a2e4783ed0b"
  },
  {
    "url": "assets/js/8.f8bd86c0.js",
    "revision": "2b52bfec3bb547c5acd654aa02ecff25"
  },
  {
    "url": "assets/js/80.194cd1b9.js",
    "revision": "7a930f2e3286a06afddf6a157a75bbc1"
  },
  {
    "url": "assets/js/81.ef23515d.js",
    "revision": "40514c2a6dc5b1d589d0e6bac46f85c9"
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
    "url": "assets/js/app.c66142bb.js",
    "revision": "307be5071d1dcc301f9545cc2be9409a"
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
    "revision": "55f51766e8628c6f9f385ce0d74de568"
  },
  {
    "url": "faq/index.html",
    "revision": "a90dea2c98d0433847b9dcf820220f1a"
  },
  {
    "url": "guide/assets.html",
    "revision": "fd2ebd35bc70bdc33aafce73eaf039bb"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cd6229ea228401ab0cb2530cb8a54850"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ce080904f48eb192036bd41b5ba027ac"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "536eebb7b1ff271955bf69d14552fb5f"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "126387ac96e34c0c2f9548709e60cc44"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6ebc848c04c7306b318eb20ac00a0d51"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "3f8d586b2021a6316e20fdc1e5b7b427"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a85d0ea0b778bdcb39912719e2ba4afb"
  },
  {
    "url": "guide/index.html",
    "revision": "9df13c65559df0f337c14eaf2b1d2e81"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "00ed4eab71339508f0234afc62da6da7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "55a1d7fd630110a38470bd258e2dce27"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "576c5a15bfa28b98be90bc3514d859ef"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3b808771ea63a45d422abe1465a7f9ea"
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
    "revision": "75dba1d79ffca5f532ceab2152740cca"
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
    "revision": "a38eb47feb236302660c76b441422ab8"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "050e4f4bb11cdf80d21915b1d1900e53"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "c226005cc7a8340ff541aff6abd799ea"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "578f9c179646ad4136c47c10f2f664bf"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "c87eaf8997e7cd38af9bb73af2b4302e"
  },
  {
    "url": "plugin/index.html",
    "revision": "44fe301c704562b9d27aeb88f78eba0e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "f175a692acb1a4147ed5065580c37765"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "6818c561c50ab2f503376fe14294e68e"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "22f6a87114624e8d4790c52fa2713a1a"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "aa8d234055dd6685cc26f69bbf727147"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "33cbfb2a71e5b63acbfc8ee217a9a56c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "43dfabb6f969cc2dc310264a0d4cd7c1"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "7717d6d47c6b2b8830d7c326d877b29d"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "13b28e738cf8e7b56f719583aee2455d"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "e6e4778f2d7c0ac48a6cb5dfdb449baf"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "6f25de6e85e8a5d39f302816cf1e2899"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "d8ff8f4c7a38fb1d3ce8d8b92da9c804"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "6dc8a38dac5bb240340081a993350a6e"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "37d31dc8cd004d7630b2dc94e4438748"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "5050e9698b0f16150d291eaa9295329d"
  },
  {
    "url": "zh/api/node.html",
    "revision": "f907f6b68019c832f333cb98c888718b"
  },
  {
    "url": "zh/config/index.html",
    "revision": "3d9c616a60fa0997142af557bdcc7eb8"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "c5618e462c7033a652eeabaa9689a54e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "7893d3bd984bc2915e8844856497db39"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4ebe51a583a9189fec57d13f7383a96c"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "748fee8bb61ca33bad10f13fc3acee74"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "86afa792a5568124d5f7656d093e6d79"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "96f75942bcfcc82ad17d0c825351a26f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "c0e3d71d23d81e736490a6f8d1a8918d"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "23eb34140584eee172e11e8acec2184f"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f470017f690b0ef972d403bc2b108eaa"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bcdd1b362d952050b41d0176f5e7a4b1"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "353cba94e704e1ce0eb2da2578e8cfa5"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "9b1a3e7d1ac118edfce2dac796f6b543"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "10a05041396718952847f7d66371b1bf"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "f2d148bb9b8e1c3172d67e59a6ec5cab"
  },
  {
    "url": "zh/index.html",
    "revision": "04ee7797b752fce3d96540a06633bfda"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "f730eedd19849cb73b751c4be4fc7803"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "8684ab600bec97c74a1b07ac22edcf94"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "b5ba6a193756c3b9589134cdcdd24fa8"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "ad89275a9f51ad36eb8ea8eac779f608"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "4d0d6b7056fe60ed69696b429b338f61"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "55063f84d52f68c6ef5de4945c6ed6d0"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "a5281a0e13893c92a6afc9e0c81b5c1e"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "2282e9bb25c8104906df67b77a64041b"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "79499c9f510f62bdd45444608f45c538"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "1cdf3cd080b72fa57a1f190d28fb302f"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "be45d25948cec9524a144fa0774c5631"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "3178b178e77235a35dc9bbff52f4a13a"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "7f229259a90b44945402631273125c43"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "925bd6601adcee9be61c6963e4cefb5f"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "9fea642c066e8ce3fd23e92d37636a64"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "a2963aa4bced7a7b5c0cd9acce0c199c"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "738319c635193ecac366c284cccb6a68"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "f05b8d2ca36b317ef9f3e89046bb16d8"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "2db9bee757488db9a44f018b187368c3"
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

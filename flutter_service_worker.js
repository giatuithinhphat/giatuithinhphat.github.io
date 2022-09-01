'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "7514a95771f5765586e4045f53a1f4c2",
"/": "7514a95771f5765586e4045f53a1f4c2",
"main.dart.js": "537f7e30a1595afa386d467aec5926d5",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "84cf07200fdd022de93cf4ebda172420",
"assets/NOTICES": "b3826d1d3af33ce7d583c22ced69bf3d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "02b2715844968bdc3e9336e591752512",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/home/vuong/cuong.jpeg": "6d2fd364590ef9c2a8d6272a683ec3ff",
"assets/assets/images/home/vuong/ku.jpeg": "2a40eba01f028d6443deb1981e1f07be",
"assets/assets/images/home/vuong/dvdacbiet.jpg": "157cc3654235413def6eb622b61e0e6b",
"assets/assets/images/home/vuong/nghe.jpeg": "b908ffd8edc1faf91fa08c68196628b2",
"assets/assets/images/home/vuong/luke.jpeg": "a152311a21a9106f562de2b0ef8deee3",
"assets/assets/images/home/vuong/tphat.jpeg": "43d6c1c9b2dcaab6e9bbd8527ab9a16c",
"assets/assets/images/home/vuong/damcuoi.png": "bd2cfa13527bf2e16415825f0914edcf",
"assets/assets/images/home/vuong/gau.jpeg": "577012be463798be6a85c4ad8f6893dc",
"assets/assets/images/home/vuong/6.jpeg": "fa6290f42e6a9777619a5eda389cbe69",
"assets/assets/images/home/vuong/motor.png": "2d48ec89b9a5db3ae2e9cea199ccc94f",
"assets/assets/images/home/vuong/nam.jpeg": "15be0a8a74156f6814c400b9e170424d",
"assets/assets/images/home/vuong/trinh.png": "a3b11a2d8146f5d39d23534ebe54392e",
"assets/assets/images/home/vuong/ngang.png": "e43e3c2358e0c5db3afd758b40b648d2",
"assets/assets/images/home/vuong/khanhlinh.jpeg": "7fb5f03a5277b6aedb6d0ca3cf3afb2d",
"assets/assets/images/home/vuong/4.png": "10a03aad59b6dc600fb007666346ad9c",
"assets/assets/images/home/vuong/5.png": "b1069e33930145a1b9bbc9c160638df2",
"assets/assets/images/home/vuong/vinh.jpeg": "53839c32092300ebe51038a8372bd2ce",
"assets/assets/images/home/vuong/2.png": "c21fd81e16d3f1300df9def1bf63859b",
"assets/assets/images/home/vuong/atudang.png": "6e4afb7f5f980565af97aaf03f68156b",
"assets/assets/images/home/vuong/3.png": "d88e4e6d74d62a40aa2cd4cac65b758f",
"assets/assets/images/home/vuong/mich.jpeg": "6a046ebadfc4a9df015cc48a452601c4",
"assets/assets/images/home/vuong/1.png": "b466185e561b7a2177b9b57c5b1f73dc",
"assets/assets/images/home/ngang/xetai.png": "5adfb5d3fd9ee9e79611abf24ff3f724",
"assets/assets/images/home/ngang/soluoc.png": "f2adb68333fbede1d9d17126f2609edb",
"assets/assets/images/home/ngang/banner.jpg": "c89f64d72c13f1898240b9f5669f3729",
"assets/assets/images/home/ngang/xepgon.png": "139ab334b4828c2055b2c50e868e224b",
"assets/assets/images/home/ngang/luke.jpeg": "ccdc90ab777a26d813f6a87fc25cf3cc",
"assets/assets/images/home/ngang/saythom.png": "607d3c1480e75c9d6e34cbaf2976f49a",
"assets/assets/images/home/ngang/Thie%25CC%2582%25CC%2581t%2520ke%25CC%2582%25CC%2581%2520chu%25CC%259Ba%2520co%25CC%2581%2520te%25CC%2582n%2520(6).png": "b653b03d17d61feef548f70006e8e848",
"assets/assets/images/home/ngang/Thie%25CC%2582%25CC%2581t%2520ke%25CC%2582%25CC%2581%2520chu%25CC%259Ba%2520co%25CC%2581%2520te%25CC%2582n%2520(4).png": "f96380b6e356ea55b585fd6619cc4774",
"assets/assets/images/home/ngang/ro.png": "030d0433c4347d9eac9d7db93b97c138",
"assets/assets/images/home/ngang/abc.jpeg": "a19b5c3a467e7072cfb26f51810cd974",
"assets/assets/images/home/ngang/maygiat.png": "cb28973f30a3de6c059ae8a4cc65affe",
"assets/assets/images/home/ngang/giatsach.png": "774da7027f008549ded82ac4a6f2331c",
"assets/assets/images/home/ngang/aosomi.png": "d1b0ec23a26df449fbf136379237a545",
"assets/assets/images/home/ngang/soluoc.jpeg": "b5f9497d7af770ed61835bd86ac1ea04",
"assets/assets/images/home/ngang/Thie%25CC%2582%25CC%2581t%2520ke%25CC%2582%25CC%2581%2520chu%25CC%259Ba%2520co%25CC%2581%2520te%25CC%2582n.png": "ecb05f6d1555f0e14669f35526d35a70",
"assets/assets/images/home/ngang/Thie%25CC%2582%25CC%2581t%2520ke%25CC%2582%25CC%2581%2520chu%25CC%259Ba%2520co%25CC%2581%2520te%25CC%2582n%2520(3).png": "b4152b59efb6e36fda26926163f33255",
"assets/assets/images/home/banghieu.png": "48bfa8f1803c56d578a47e5899842ad1",
"assets/assets/images/home/dung/dotrang-dung.jpg": "40b072780d015755bcab15848c77970c",
"assets/assets/images/home/dung/giay-dung.jpg": "25850a99e019ad9e14fa131e6fc55ee4",
"assets/assets/images/home/dung/quanao-dung.jpg": "7985909d33c9e54c52dde5f2044e3db7",
"assets/assets/images/home/dung/gau-dung.jpg": "83f0c1744a890eeaaa0a51e5b4827904",
"assets/assets/images/home/dung/aokhoac-dung.jpg": "7c98c53abe273db7cea0cb8e96b16b65",
"assets/assets/images/home/dung/somi-dung.jpg": "950a0d7e9d080c68f37ef9888bd398ee",
"assets/assets/images/home/dung/men-dung.jpg": "192e235be4f7adacab445facd51975fa",
"assets/assets/images/home/dung/giattay-dung.jpg": "bf828ae46a558492dddd00327b0d6d06",
"assets/assets/images/home/dung/jean-dung.jpg": "1d0a06bac61f22dc561a2b0a2424d03f",
"assets/assets/images/food/1610-04.png": "b49599c7b2c29b4eab6b3440fd1f3df2",
"assets/assets/images/food/1610-05.png": "a8591787b605d04382727a702afeed12",
"assets/assets/images/food/1610-02.png": "cda45a592ed8b3f978bcdcc1a1ee39aa",
"assets/assets/images/food/1610-03.png": "fb2117167edbbcbc188c942c56cb4c5f",
"assets/assets/images/food/1610-01.png": "ec551d4be9769d104fbd35d2e7cd1e60",
"assets/assets/images/drink/cfBiker02.jpg": "8249ebf280567c83e23309f9a3cb3984",
"assets/assets/images/drink/cfBiker01.jpg": "85450f581d19d8307d9d58297859db5f",
"assets/assets/images/drink/cfOanhTrang01.jpg": "08023f5dd2cbfbb0d675f264b46b5ee2",
"assets/assets/images/drink/cfOanhTrang02.jpg": "9c8989e95853c65fcff8890ad4a4af35",
"assets/assets/logo/jlogo.svg": "4bd53c2f9ed21cac9539dc3c8503c47d",
"assets/assets/logo/logo.svg": "398f5af99746d780c95f0ea9405f78b3",
"assets/assets/icons/hotel.png": "dfc411db78cdf77898977bc87c205025",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

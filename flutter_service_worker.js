'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "9deae3a76a7fb48586cb727b848b6356",
"/": "9deae3a76a7fb48586cb727b848b6356",
"main.dart.js": "fd9bd67539d3be68349b2a1c927e0f70",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "b1f1cf85796766349b6f5d70b859f79d",
"assets/NOTICES": "b3826d1d3af33ce7d583c22ced69bf3d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "02b2715844968bdc3e9336e591752512",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/thinhphat_vuong.jpeg": "9555d5de7beb950b096dd6da830ae1fe",
"assets/assets/images/hinhthucte/Heo.jpeg": "bb9bbd651328fad45f10ce4c445ecce9",
"assets/assets/images/hinhthucte/GiatGau.jpeg": "dd377ee956a4bf6066e92806890e8abf",
"assets/assets/images/hinhthucte/Me.jpeg": "130c408c337be51fabed404b67b7f4ed",
"assets/assets/images/hinhthucte/Cha.jpeg": "3d35e959a57364d486881af9add677a9",
"assets/assets/images/hinhthucte/Z1000.jpeg": "860323a328ca9203107f5bd26484e48e",
"assets/assets/images/hinhthucte/tiem_16_10.jpeg": "9026ebe580a6045669b188e9c97a7df3",
"assets/assets/images/hinhthucte/MayGiat.jpeg": "892eb7127e52461eca350aa4c0c75975",
"assets/assets/images/dichvu/dichvu_ngang.jpeg": "73078d699f05f9f836b340a80215fde3",
"assets/assets/images/dichvu/dichvu_doc.jpeg": "1b84d4610697a0ed2dc3f52f65c52100",
"assets/assets/images/slogan/xepgon.webp": "8a26cd97b8504dcff79dcd04421177c5",
"assets/assets/images/slogan/giatsach.webp": "4ec227f87b613e62eebf991d10e2dccc",
"assets/assets/images/slogan/saythom.webp": "914cb40d0627aa5f1075608901bee090",
"assets/assets/images/khach/Cuong.jpeg": "a123896db19d64db2221b3d2d2d05604",
"assets/assets/images/khach/Ku.jpeg": "b4f8c57dca76c2715cd852777404a058",
"assets/assets/images/khach/Luke.jpeg": "861adbaf6b47e12007966c883b2b7d0d",
"assets/assets/images/khach/ChanMou.jpeg": "9fb0df4fcf5cd2753f44cf4f39e50ffe",
"assets/assets/images/khach/Gau.jpeg": "b3745fda8e0a356f8305d37ad82ba4c2",
"assets/assets/images/khach/Nam.jpeg": "f513cc5eb721794e44ac998d53e10152",
"assets/assets/images/khach/KhanhLinh.jpeg": "f32488ff28f2973faa044cc55acb0e2a",
"assets/assets/images/khach/Trinh.jpeg": "eadeb0bc8cbefaab7b1a23c192a3e4f9",
"assets/assets/images/khach/Vinh.jpeg": "27bd2b7d608bab73dcc0171692d1a947",
"assets/assets/images/khach/Ngan.jpeg": "631d3711ce4c4cf2acc62225973cb0d5",
"assets/assets/images/khach/Mich.jpeg": "56e7abd3cf8947a08112355fb3eda64a",
"assets/assets/images/maygiat_01.jpeg": "5dc78419a0e8fed08da297ae373cd02a",
"assets/assets/images/maygiat.jpeg": "6563f47ce16b9981d2a9cd651a6b2fdf",
"assets/assets/images/services/antam.png": "efb18d5d127184e48e61ee10c739423c",
"assets/assets/images/services/xep.jpeg": "f2f02e6193bcf033b7554879ef2931b9",
"assets/assets/images/services/giat.jpeg": "093f4a87941372d6dee5863254c2b188",
"assets/assets/images/services/giattay.jpeg": "542ea1046c57c8a9cf101bc51f5c5886",
"assets/assets/images/services/nhan.jpeg": "ff0c09ff2bc4763e2d022950bf49e327",
"assets/assets/images/services/chatluong.png": "374f52bf62dee9fc44ec1e8c817df7bc",
"assets/assets/images/services/tienloi.png": "b1b776121ac12cdbede94b852cd4e34a",
"assets/assets/images/services/ui.jpeg": "6c8e070a0ad0210224bf1824685500f0",
"assets/assets/images/services/ship.jpeg": "72e817fb1c5512d61a8eb1faef2ebb87",
"assets/assets/images/banner/banner.webp": "6beed39c9df3d8051b215553032fcbb9",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "b3eb3d9f1dc82773027a50a2c4a74063",
"/": "b3eb3d9f1dc82773027a50a2c4a74063",
"main.dart.js": "2be79df6a8d11a795f1413ddf3c1ceb6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "ce251d77966e805450dfeea5a1ab770d",
"assets/NOTICES": "b3826d1d3af33ce7d583c22ced69bf3d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "02b2715844968bdc3e9336e591752512",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/home/soluoc/3.webp": "2706a1f65b9a12ece66d0a896b109fca",
"assets/assets/images/home/soluoc/2.webp": "d4a4cacec662fcd53d8787d0620538c7",
"assets/assets/images/home/soluoc/1.webp": "1a4ba804196ddcc9431c09bc30218141",
"assets/assets/images/quatrinhlamviec/aosomi.webp": "844d115c53a9db4f7c38916469ac70f2",
"assets/assets/images/quatrinhlamviec/maygiat.webp": "f4d27a53aea93bc8699c79e5b8609e4d",
"assets/assets/images/quatrinhlamviec/ro.webp": "623dd8036cb43e19f2204680beb02b4b",
"assets/assets/images/quatrinhlamviec/xetai.webp": "e7d70f2250b7ef6c3aa42ec8c7435e3e",
"assets/assets/images/about/tphat.webp": "1f6dbb368f6b6dc2c5980eef45b0685d",
"assets/assets/images/dichvu/giayquan.webp": "e057bc26abb887b707ebd95f8d123528",
"assets/assets/images/dichvu/dvdacbiet.webp": "f40ba973ae098c51fe3d7eaa97f65fec",
"assets/assets/images/dichvu/damcuoi.webp": "bad8cf70e2ea4455b225b3c6e06c548c",
"assets/assets/images/dichvu/motor.webp": "c6167ccf807a2039b494fcf9a671021d",
"assets/assets/images/dichvu/dichvungang.webp": "2da63c99a70fd93b7162b5e5e48c3cd8",
"assets/assets/images/hinhquangcaotiem/phoido1.webp": "bb82ed171b1c7145bb9ccc2942f6f3fc",
"assets/assets/images/hinhquangcaotiem/5.webp": "8473202c4ae632d40278f18e7e1c813c",
"assets/assets/images/hinhquangcaotiem/4.webp": "f914d85a767638e0bdef7e3601eb4907",
"assets/assets/images/hinhquangcaotiem/3.webp": "e9c97592fe7f0d9120cf3c8a98066d92",
"assets/assets/images/hinhquangcaotiem/2.webp": "96fba8ac115ad2887a5865dab590e21d",
"assets/assets/images/hinhquangcaotiem/ngang.webp": "7798f794a12f9dc529ad18f91fde6fa9",
"assets/assets/images/hinhquangcaotiem/somi2.webp": "8a1203bf549ab8d696c4cfdec9e3e6b3",
"assets/assets/images/hinhquangcaotiem/somi1.webp": "d005e09bd850f282ca23c3be8de9503d",
"assets/assets/images/hinhquangcaotiem/1.webp": "aee578503479dc34bfdbe6dd6e75dbb9",
"assets/assets/images/hinhquangcaotiem/luke.webp": "e77bb39682b3aed891a3e1a0c43df4dd",
"assets/assets/images/hinhquangcaotiem/6.webp": "1683aca15eb21b6b2fa165418fe75203",
"assets/assets/images/slogan/xepgon.webp": "8a26cd97b8504dcff79dcd04421177c5",
"assets/assets/images/slogan/giatsach.webp": "4ec227f87b613e62eebf991d10e2dccc",
"assets/assets/images/slogan/saythom.webp": "914cb40d0627aa5f1075608901bee090",
"assets/assets/images/food/1610-04.png": "b49599c7b2c29b4eab6b3440fd1f3df2",
"assets/assets/images/food/1610-05.png": "a8591787b605d04382727a702afeed12",
"assets/assets/images/food/1610-02.png": "cda45a592ed8b3f978bcdcc1a1ee39aa",
"assets/assets/images/food/1610-03.png": "fb2117167edbbcbc188c942c56cb4c5f",
"assets/assets/images/food/1610-01.png": "ec551d4be9769d104fbd35d2e7cd1e60",
"assets/assets/images/khach/trinh.webp": "647052915fe293e7e11c50001e54983c",
"assets/assets/images/khach/nam.webp": "75b5e71921a74e5abb9881f044f06092",
"assets/assets/images/khach/khanhlinh.webp": "211ea56465d94adefc390f0ac13d2a51",
"assets/assets/images/khach/mich.webp": "26688240e24a98a7e8dc7580c3afc64b",
"assets/assets/images/khach/atudang.webp": "94e2197f3445a78b7c2c7bf367041916",
"assets/assets/images/khach/vinh.webp": "23d56d9b6ea8af084c14bb1d95bb049e",
"assets/assets/images/khach/nghe.webp": "139be7154db165bd5cfedd4600688c6a",
"assets/assets/images/khach/cuong.webp": "0d7a928ca35b47163b870c011e25fe24",
"assets/assets/images/khach/ku.webp": "35156886ffee99178ec17203dde45c2c",
"assets/assets/images/khach/luke.webp": "7b55a50a0097bf7da47e95fe5f85420e",
"assets/assets/images/khach/gau.webp": "423e1900bd116f5865393da6ff6c0363",
"assets/assets/images/drink/cfBiker02.jpg": "8249ebf280567c83e23309f9a3cb3984",
"assets/assets/images/drink/cfBiker01.jpg": "85450f581d19d8307d9d58297859db5f",
"assets/assets/images/drink/cfOanhTrang01.jpg": "08023f5dd2cbfbb0d675f264b46b5ee2",
"assets/assets/images/drink/cfOanhTrang02.jpg": "9c8989e95853c65fcff8890ad4a4af35",
"assets/assets/images/services/antam.png": "efb18d5d127184e48e61ee10c739423c",
"assets/assets/images/services/chatluong.png": "374f52bf62dee9fc44ec1e8c817df7bc",
"assets/assets/images/services/tienloi.png": "b1b776121ac12cdbede94b852cd4e34a",
"assets/assets/images/banner/banner.webp": "473d7f9d0c3934b980f328296c60739b",
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

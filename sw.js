self.addEventListener('install', function(e) {
  console.log('service worker intsalled');
});

let cacheName = 'curconvt-v1';
let appShellFiles = [
  '/'
]
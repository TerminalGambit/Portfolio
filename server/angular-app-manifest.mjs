
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YBYASHJL.js",
      "chunk-WVHZH675.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HTYHSZPZ.js",
      "chunk-5FOBUFSD.js",
      "chunk-WVHZH675.js",
      "chunk-Z5CKFZHI.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-L6DOJC4V.js",
      "chunk-5FOBUFSD.js",
      "chunk-WVHZH675.js",
      "chunk-Z5CKFZHI.js"
    ],
    "route": "/project/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5PBRDL56.js",
      "chunk-Z5CKFZHI.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 37867, hash: '20b1d746b3f3c177f0560e9a47635d23ffb4a64c9f3a4294df63ea05efa868a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17391, hash: 'cc0ff4fa3ac8ad07517a5968cd6f70c9cea085f7c6d1950838b0067aafaf5da6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 162341, hash: '3758e7face46874d0abe2e15b3d56983636f7c659c47a90b58a4b8577a838728', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 170673, hash: '4034d532decffc33e39a33953e8d1323a976e94bda76b26c5861100893c0d1d9', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 101890, hash: '8f589a6ea8357488e215de935404d461809ea5e554c4a6e74463ad1b8cae9f2b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 104150, hash: '4cdb46847fbf51eda0bc0a0eb23de7832091cc3b69b718b8ac84faa537b3d217', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-A5CVADZP.css': {size: 41806, hash: 'Eh3of/jUPfM', text: () => import('./assets-chunks/styles-A5CVADZP_css.mjs').then(m => m.default)}
  },
};

if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const a=e=>n(e,r),f={module:{uri:r},exports:o,require:a};i[r]=Promise.all(d.map((e=>f[e]||a(e)))).then((e=>(c(...e),o)))}}define(["./workbox-e2fb9c6a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-icon-144x144.png",revision:"f1d475c6008245567304a52145835a72"},{url:"android-icon-192x192.png",revision:"eb09a35d2a5a5525368a743028622e65"},{url:"android-icon-36x36.png",revision:"16154ab8fd9a014d40c567e9bfb1e006"},{url:"android-icon-48x48.png",revision:"b7ca33d73aa7809df66c2192dc1907d2"},{url:"android-icon-72x72.png",revision:"768d08fe4db63a24652ed5a01f328dcf"},{url:"android-icon-96x96.png",revision:"ad7dbb7480a2661d14e4d8d0f8f1a065"},{url:"apple-icon-114x114.png",revision:"b26f320749a34f6752d83c5a17fa05c6"},{url:"apple-icon-120x120.png",revision:"50f90b63e34528e7054c3006315a14d6"},{url:"apple-icon-144x144.png",revision:"d3ab52ded7bc13a2e61283e0c8e3f0ec"},{url:"apple-icon-152x152.png",revision:"f0593b6c84ea05dd5435076e1860bb53"},{url:"apple-icon-180x180.png",revision:"3cc3ebd3a83e1b746bbdd88b9c960b2b"},{url:"apple-icon-57x57.png",revision:"bb4a78e2710fbdd8788e07cf616746ca"},{url:"apple-icon-60x60.png",revision:"ba16ce000face8a9f0c0f9cdc2f8ff06"},{url:"apple-icon-72x72.png",revision:"768d08fe4db63a24652ed5a01f328dcf"},{url:"apple-icon-76x76.png",revision:"c9eeea25bb616f5bb84219ef4e670f6d"},{url:"apple-icon-precomposed.png",revision:"67b088c60a349f4559da8b99a7bf396f"},{url:"apple-icon.png",revision:"67b088c60a349f4559da8b99a7bf396f"},{url:"browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"favicon-16x16.png",revision:"bd93884acf6386ea470ca2451d9b7258"},{url:"favicon-32x32.png",revision:"19bf67ab8941106b73a0c27d787dd8c0"},{url:"favicon-96x96.png",revision:"6db759503f129e42bca4f91ab7f68422"},{url:"favicon.ico",revision:"eb17b51e059de6c809f7e75d2c163d58"},{url:"index.html",revision:"c437502678411845866b8c97e4eed67f"},{url:"manifest.json",revision:"b538fcdd54d03132a2a4e316762fb6ea"},{url:"ms-icon-144x144.png",revision:"d3ab52ded7bc13a2e61283e0c8e3f0ec"},{url:"ms-icon-150x150.png",revision:"f077346039dbd6397d5031b3685521c6"},{url:"ms-icon-310x310.png",revision:"9cf285f1b8822e7ee8c8bd0d02bb7b97"},{url:"ms-icon-70x70.png",revision:"5e829b6d521db4ed79183d0beb6120e0"},{url:"README.md",revision:"3c6b242890162409e798e5b2cb71e3c7"},{url:"script.js",revision:"c10a04cf6b72b403335bbe6b439a3c3d"},{url:"style/img/inverted-dice-1.svg",revision:"7f2dd155bfe2d86bafee1f8bd98e88f0"},{url:"style/img/inverted-dice-2.svg",revision:"c43e2ff772756f2e298184c9b4850e6b"},{url:"style/img/inverted-dice-3.svg",revision:"74a894de817972ebe87fdd3d130ac01c"},{url:"style/img/inverted-dice-4.svg",revision:"4318b44593579a76c883d4a97a55400a"},{url:"style/img/inverted-dice-5.svg",revision:"7a566f2bf25d1ae26d4532d5db50c5e4"},{url:"style/img/inverted-dice-6.svg",revision:"f193890a38ad28f9112509fc0f26d647"},{url:"style/style.css",revision:"c93d1d99695ffa0805b44fa9e35d5084"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
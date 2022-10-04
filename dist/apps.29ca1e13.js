// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"apps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = exports.displayMenuItems = exports.displayBtns = exports.all = void 0;
var menu = [{
  id: 1,
  title: "buttermilk pancakes",
  category: "breakfast",
  price: 15.99,
  img: "./images/images/item-1.jpeg",
  desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
  video: 'https://thumbs.gfycat.com/GleefulHonoredAfricanjacana-mobile.mp4'
}, {
  id: 2,
  title: "diner double",
  category: "lunch",
  price: 13.99,
  img: "./images/images/item-2.jpeg",
  desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
}, {
  id: 3,
  title: "godzilla milkshake",
  category: "shakes",
  price: 6.99,
  img: "./images/images/item-3.jpeg",
  desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
}, {
  id: 4,
  title: "country delight",
  category: "breakfast",
  price: 20.99,
  img: "./images/images/item-4.jpeg",
  desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
}, {
  id: 5,
  title: "egg attack",
  category: "lunch",
  price: 22.99,
  img: "./images/images/item-5.jpeg",
  desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
}, {
  id: 6,
  title: "oreo dream",
  category: "shakes",
  price: 18.99,
  img: "./images/images/item-6.jpeg",
  desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
}, {
  id: 7,
  title: "bacon overflow",
  category: "breakfast",
  price: 8.99,
  img: "./images/images/item-7.jpeg",
  desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
}, {
  id: 8,
  title: "american classic",
  category: "lunch",
  price: 12.99,
  img: "./images/images/item-8.jpeg",
  desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
}, {
  id: 9,
  title: "quarantine buddy",
  category: "shakes",
  price: 16.99,
  img: "./images/images/item-9.jpeg",
  desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
}];
exports.menu = menu;
var all = 'all';
exports.all = all;
var sectionCenter = document.querySelector('.section-center');
var btnContainer = document.querySelector('.btn-container');
var title = document.querySelector('.btn-container');
var modalContainer = document.querySelector('.modal-container');
var modalOverlay = document.querySelector('.modal-overlay');
var closeBtn = document.querySelector('.close-btn');
addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayBtns(menu);
});

var displayMenuItems = function displayMenuItems(menuItems) {
  var displayMenu = menuItems.map(function (item) {
    return "<article class=\"menu-item\">\n              <img src=\"".concat(item.img, "\" class=\"photo\" alt=\"").concat(item.title, "\">\n              <div class=\"item-info\">\n                <header>\n                  <h4 class=\"translate\">").concat(item.title, "</h4>\n                  <h4 class=\"price\">").concat(item.price, "</h4>\n                </header>\n                <p class=\"item-text translate\">").concat(item.desc, "</p>\n              </div>\n            </article>");
  });
  displayMenu = displayMenu.join('');
  sectionCenter.classList.remove('animation');
  setTimeout(function () {
    sectionCenter.innerHTML = displayMenu;
    sectionCenter.classList.add('animation');
  }, 250); // Open modal to show video presentation

  setTimeout(function () {
    var photos = document.querySelectorAll('.photo');
    photos.forEach(function (photo) {
      photo.addEventListener('click', function (e) {
        var title = e.currentTarget.alt;
        var item = menuItems.filter(function (i) {
          return i.title === title;
        }); //modalContainer.innerHTML += `<video class="video" width="320" height="240" src="${item[0].video}" autoplay loop></video>`

        modalContainer.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FLd00Bx4tOk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        modalOverlay.classList.add('open-modal');
      });
    });
  }, 300);
  closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('open-modal');
  });
};

exports.displayMenuItems = displayMenuItems;

var displayBtns = function displayBtns(menuList) {
  var categories = menuList.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }

    return values;
  }, [all]);
  var categoryBtn = categories.map(function (category) {
    return "<button class=\"filter-btn translate\" type=\"button\" data-id=".concat(category, ">").concat(category, "</button>");
  }).join('');
  btnContainer.innerHTML = categoryBtn;
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var category = e.currentTarget.dataset.id;
      var menuCategory = menuList.filter(function (menuItem) {
        return menuItem.category === category;
      });

      if (category === all) {
        displayMenuItems(menuList);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};

exports.displayBtns = displayBtns;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53052" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","apps.js"], null)
//# sourceMappingURL=/apps.29ca1e13.js.map
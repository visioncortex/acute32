/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/symcode_webapp_bg.wasm": function() {
/******/ 			return {
/******/ 				"./symcode_webapp_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_9c4fd26090e1d029": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_instanceof_Window_9c4fd26090e1d029"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_249e9cf340780f93": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_document_249e9cf340780f93"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_2ee254bbb67b6ae1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_getElementById_2ee254bbb67b6ae1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_debug_8cbacf3c2ac7dd30": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_debug_8cbacf3c2ac7dd30"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_error_3766ee0164348c32": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_error_3766ee0164348c32"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_info_d8a33d4400a24fd8": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_info_d8a33d4400a24fd8"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_log_386a8115a84a780d": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_log_386a8115a84a780d"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_6ec27d0b9bf3cc32": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_log_6ec27d0b9bf3cc32"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_warn_e9faf5f3087bbb16": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_warn_e9faf5f3087bbb16"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_72f1ad8117744d41": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_setstrokeStyle_72f1ad8117744d41"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginPath_0dcd4a1d09e0223c": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_beginPath_0dcd4a1d09e0223c"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_bed807f727b58a90": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_stroke_bed807f727b58a90"](p0i32);
/******/ 					},
/******/ 					"__wbg_getImageData_6e56dc172cd2ed36": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_getImageData_6e56dc172cd2ed36"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_putImageData_a0ab6f94c11984ac": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_putImageData_a0ab6f94c11984ac"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_lineTo_3acee3da29728cb9": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_lineTo_3acee3da29728cb9"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_bd43ecdbb947f343": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_moveTo_bd43ecdbb947f343"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_clearRect_dbb56982eff2a250": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_clearRect_dbb56982eff2a250"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_5843e31ec081f978": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_width_5843e31ec081f978"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_fd251e9da5abcced": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_setwidth_fd251e9da5abcced"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_872c06b1bc666dd9": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_height_872c06b1bc666dd9"](p0i32);
/******/ 					},
/******/ 					"__wbg_setheight_5b882973e84fa13c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_setheight_5b882973e84fa13c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_d778ffc8203f64ae": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_getContext_d778ffc8203f64ae"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_data_7db9e348ce1855fa": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_data_7db9e348ce1855fa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithu8clampedarrayandsh_daf4b2743e8c858d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_newwithu8clampedarrayandsh_daf4b2743e8c858d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_call_cb478d88f3068c91": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_call_cb478d88f3068c91"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_3efc7bfa69a681f9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_newnoargs_3efc7bfa69a681f9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_05c54dcacb623b9a": function() {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_self_05c54dcacb623b9a"]();
/******/ 					},
/******/ 					"__wbg_window_9777ce446d12989f": function() {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_window_9777ce446d12989f"]();
/******/ 					},
/******/ 					"__wbg_globalThis_f0ca0bbb0149cf3d": function() {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_globalThis_f0ca0bbb0149cf3d"]();
/******/ 					},
/******/ 					"__wbg_global_c3c8325ae8c7f1a9": function() {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbg_global_c3c8325ae8c7f1a9"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../pkg/symcode_webapp_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/symcode_webapp_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/symcode_webapp_bg.wasm":"1e8f5c36aa4d28c95352"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });
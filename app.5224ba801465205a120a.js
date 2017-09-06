webpackJsonp([0,3],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o),s=n(31),a=r(s),c=n(!function(){var t=new Error('Cannot find module "./components/App"');throw t.code="MODULE_NOT_FOUND",t}()),u=r(c),f=n(171),l=r(f);a.default.render(i.default.createElement(l.default,null,i.default.createElement(u.default,null)),document.getElementById("app"))},171:function(t,e,n){"use strict";t.exports=n(172)},172:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),s=n(173),a=r(s),c=n(185),u=r(c),f=n(200),l=r(f);(0,l.default)(u.default),e.default=function(t){var e=t.children;return i.default.createElement(a.default,{flux:u.default},e)}},173:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(t,e,n){for(var r=!0;r;){var o=t,i=e,s=n;a=u=c=void 0,r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,i);if(void 0!==a){if("value"in a)return a.value;var c=a.get;if(void 0===c)return;return c.call(s)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=i,n=s,r=!0}},c=n(1),u=r(c),f=n(174),l=r(f),p=function(t){return t},h=function(t,e){return"function"==typeof t?t(e).value:t.getState()},d=function(t,e){return"function"==typeof t?t(e):t},y=function(t){return t.actions?d(t.actions,t):{}},b=function(t){return t.inject?Object.keys(t.inject).reduce(function(e,n){return e[n]=d(t.inject[n],t),e},{}):{}},v=function(t){return(0,l.default)({},g(t),y(t),b(t))},g=function(t){var e=t.stores;return t.store?h(t.store,t):t.stores?Array.isArray(e)?void 0:Object.keys(e).reduce(function(n,r){return n[r]=h(e[r],t),n},{}):{}},O=function(t){function e(t){var n=this;if(o(this,e),a(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.altSetState=function(){n.setState(v(n.props))},t.stores&&t.store)throw new ReferenceError("Cannot define both store and stores");this.storeListeners=[],this.state=v(t)}return i(e,t),s(e,[{key:"getChildContext",value:function(){var t=this.props.flux||this.context.flux;return t?{flux:t}:{}}}],[{key:"contextTypes",value:{flux:u.default.PropTypes.object},enumerable:!0},{key:"childContextTypes",value:{flux:u.default.PropTypes.object},enumerable:!0}]),s(e,[{key:"componentWillReceiveProps",value:function(t){this._destroySubscriptions(),this.setState(v(t)),this._registerStores(t),this.props.onWillReceiveProps&&this.props.onWillReceiveProps(t,this.props,this.context)}},{key:"componentDidMount",value:function(){this._registerStores(this.props),this.props.onMount&&this.props.onMount(this.props,this.context)}},{key:"componentWillUnmount",value:function(){this._destroySubscriptions(),this.props.onWillUnmount&&this.props.onWillUnmount(this.props,this.context)}},{key:"_registerStores",value:function(t){var e=this,n=t.stores;t.store?this._addSubscription(t.store):t.stores&&(Array.isArray(n)?n.forEach(function(t){return e._addSubscription(t)}):Object.keys(n).forEach(function(t){e._addSubscription(n[t])}))}},{key:"_destroySubscriptions",value:function(){this.storeListeners.forEach(function(t){return t()})}},{key:"_addSubscription",value:function(t){var e="function"==typeof t?t(this.props).store:t;this.storeListeners.push(e.listen(this.altSetState))}},{key:"getProps",value:function(){var t=this.props.flux||this.context.flux,e="function"==typeof this.props.transform?this.props.transform:p;return e((0,l.default)(t?{flux:t}:{},this.state))}},{key:"shouldComponentUpdate",value:function(t,e){return!this.props.shouldComponentUpdate||this.props.shouldComponentUpdate(this.getProps(),t,e)}},{key:"render",value:function(){var t=this,e="div",n=this.props.children;return"function"==typeof this.props.render?this.props.render(this.getProps()):this.props.component?u.default.createElement(this.props.component,this.getProps()):Array.isArray(n)?u.default.createElement(e,null,n.map(function(e,n){return u.default.cloneElement(e,(0,l.default)({key:n},t.getProps()))})):n?u.default.cloneElement(n,this.getProps()):u.default.createElement(e,this.getProps())}}]),e}(u.default.Component);e.default=O,t.exports=e.default},174:function(t,e,n){"use strict";var r=n(175),o=n(179),i=n(183),s=n(184),a=i();r(a,{implementation:o,getPolyfill:i,shim:s}),t.exports=a},175:function(t,e,n){"use strict";var r=n(176),o=n(178),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),s=Object.prototype.toString,a=function(t){return"function"==typeof t&&"[object Function]"===s.call(t)},c=function(){var t={};try{Object.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}},u=Object.defineProperty&&c(),f=function(t,e,n,r){(!(e in t)||a(r)&&r())&&(u?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},l=function(t,e){var n=arguments.length>2?arguments[2]:{},s=r(e);i&&(s=s.concat(Object.getOwnPropertySymbols(e))),o(s,function(r){f(t,r,e[r],n[r])})};l.supportsDescriptors=!!u,t.exports=l},176:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,s=n(177),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(t){var e=t.constructor;return e&&e.prototype===t},p={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!p["$"+t]&&r.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{l(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),d=function(t){if("undefined"==typeof window||!h)return l(t);try{return l(t)}catch(t){return!1}},y=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===o.call(t),i=s(t),a=e&&"[object String]"===o.call(t),l=[];if(!e&&!n&&!i)throw new TypeError("Object.keys called on a non-object");var p=u&&n;if(a&&t.length>0&&!r.call(t,0))for(var h=0;h<t.length;++h)l.push(String(h));if(i&&t.length>0)for(var y=0;y<t.length;++y)l.push(String(y));else for(var b in t)p&&"prototype"===b||!r.call(t,b)||l.push(String(b));if(c)for(var v=d(t),g=0;g<f.length;++g)v&&"constructor"===f[g]||!r.call(t,f[g])||l.push(f[g]);return l};y.shim=function(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var e=Object.keys;Object.keys=function(t){return e(s(t)?i.call(t):t)}}}else Object.keys=y;return Object.keys||y},t.exports=y},177:function(t,e){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e=n.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},178:function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;t.exports=function(t,e,o){if("[object Function]"!==r.call(e))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var s=0;s<i;s++)e.call(o,t[s],s,t);else for(var a in t)n.call(t,a)&&e.call(o,t[a],a,t)}},179:function(t,e,n){"use strict";var r=n(176),o=n(180),i=function(t){return"undefined"!=typeof t&&null!==t},s=n(182)(),a=Object,c=o.call(Function.call,Array.prototype.push),u=o.call(Function.call,Object.prototype.propertyIsEnumerable),f=s?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!i(t))throw new TypeError("target must be an object");var n,o,l,p,h,d,y,b=a(t);for(n=1;n<arguments.length;++n){o=a(arguments[n]),p=r(o);var v=s&&(Object.getOwnPropertySymbols||f);if(v)for(h=v(o),l=0;l<h.length;++l)y=h[l],u(o,y)&&c(p,y);for(l=0;l<p.length;++l)y=p[l],d=o[y],u(o,y)&&(b[y]=d)}return b}},180:function(t,e,n){"use strict";var r=n(181);t.exports=Function.prototype.bind||r},181:function(t,e){"use strict";var n="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,i="[object Function]";t.exports=function(t){var e=this;if("function"!=typeof e||o.call(e)!==i)throw new TypeError(n+e);for(var s,a=r.call(arguments,1),c=function(){if(this instanceof s){var n=e.apply(this,a.concat(r.call(arguments)));return Object(n)===n?n:this}return e.apply(t,a.concat(r.call(arguments)))},u=Math.max(0,e.length-a.length),f=[],l=0;l<u;l++)f.push("$"+l);if(s=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(c),e.prototype){var p=function(){};p.prototype=e.prototype,s.prototype=new p,p.prototype=null}return s}},182:function(t,e,n){"use strict";var r=n(176);t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),n=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;var o=42;t[e]=o;for(e in t)return!1;if(0!==r(t).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var i=Object.getOwnPropertySymbols(t);if(1!==i.length||i[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var s=Object.getOwnPropertyDescriptor(t,e);if(s.value!==o||s.enumerable!==!0)return!1}return!0}},183:function(t,e,n){"use strict";var r=n(179),o=function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),n={},r=0;r<e.length;++r)n[e[r]]=e[r];var o=Object.assign({},n),i="";for(var s in o)i+=s;return t!==i},i=function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1};t.exports=function(){return Object.assign?o()?r:i()?r:Object.assign:r}},184:function(t,e,n){"use strict";var r=n(175),o=n(183);t.exports=function(){var t=o();return r(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},185:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(186),c=r(a),u=n(199),f=r(u),l=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.FinalStore=(0,f.default)(n),n}return s(e,t),e}(c.default),p=new l;e.default=p},186:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var c=n(187),u=n(190),f=o(u),l=n(191),p=o(l),h=n(192),d=o(h),y=n(193),b=o(y),v=n(197),g=r(v),O=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];a(this,t),this.config=e,this.serialize=e.serialize||JSON.stringify,this.deserialize=e.deserialize||JSON.parse,this.dispatcher=e.dispatcher||new c.Dispatcher,this.batchingFunction=e.batchingFunction||function(t){return t()},this.actions={global:{}},this.stores={},this.storeTransforms=e.storeTransforms||[],this.trapAsync=!1,this._actionsRegistry={},this._initSnapshot={},this._lastSnapshot={}}return t.prototype.dispatch=function(){function t(t,e,n){var r=this;this.batchingFunction(function(){var o=Math.random().toString(18).substr(2,16);if(t.hasOwnProperty("type")&&t.hasOwnProperty("payload")){var i={id:t.type,namespace:t.type,name:t.type};return r.dispatcher.dispatch(b.fsa(o,t.type,t.payload,i))}return t.id&&t.dispatch?b.dispatch(o,t,e,r):r.dispatcher.dispatch(b.fsa(o,t,e,n))})}return t}(),t.prototype.createUnsavedStore=function(){function t(t){var e=t.displayName||"";d.createStoreConfig(this.config,t);for(var n=d.transformStore(this.storeTransforms,t),r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return p.isFunction(n)?d.createStoreFromClass.apply(d,[this,n,e].concat(o)):d.createStoreFromObject(this,n,e)}return t}(),t.prototype.createStore=function(){function t(t,e){var n=e||t.displayName||t.name||"";d.createStoreConfig(this.config,t);var r=d.transformStore(this.storeTransforms,t);!this.stores[n]&&n||(this.stores[n]?b.warn("A store named "+String(n)+" already exists, double check your store names or pass in your own custom identifier for each store"):b.warn("Store name was not specified"),n=b.uid(this.stores,n));for(var o=arguments.length,i=Array(o>2?o-2:0),s=2;s<o;s++)i[s-2]=arguments[s];var a=p.isFunction(r)?d.createStoreFromClass.apply(d,[this,r,n].concat(i)):d.createStoreFromObject(this,r,n);return this.stores[n]=a,f.saveInitialSnapshot(this,n),a}return t}(),t.prototype.generateActions=function(){function t(){for(var t={name:"global"},e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return this.createActions(n.reduce(function(t,e){return t[e]=b.dispatchIdentity,t},t))}return t}(),t.prototype.createAction=function(){function t(t,e,n){return(0,g.default)(this,"global",t,e,n)}return t}(),t.prototype.createActions=function(){function t(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r={},o=b.uid(this._actionsRegistry,t.displayName||t.name||"Unknown");if(p.isFunction(t)){p.assign(r,b.getPrototypeChain(t));for(var c=function(t){function e(){a(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return i(this,t.call.apply(t,[this].concat(r)))}return s(e,t),e.prototype.generateActions=function(){function t(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){r[t]=b.dispatchIdentity})}return t}(),e}(t),u=arguments.length,f=Array(u>2?u-2:0),l=2;l<u;l++)f[l-2]=arguments[l];p.assign(r,new(Function.prototype.bind.apply(c,[null].concat(f))))}else p.assign(r,t);return this.actions[o]=this.actions[o]||{},p.eachObject(function(t,r){if(!p.isFunction(r))return void(n[t]=r);n[t]=(0,g.default)(e,o,t,r,n);var i=b.formatAsConstant(t);n[i]=n[t].id},[r]),n}return t}(),t.prototype.takeSnapshot=function(){function t(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=f.snapshot(this,e);return p.assign(this._lastSnapshot,r),this.serialize(r)}return t}(),t.prototype.rollback=function(){function t(){f.setAppState(this,this.serialize(this._lastSnapshot),function(t){t.lifecycle("rollback"),t.emitChange()})}return t}(),t.prototype.recycle=function(){function t(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.length?f.filterSnapshots(this,this._initSnapshot,e):this._initSnapshot;f.setAppState(this,this.serialize(r),function(t){t.lifecycle("init"),t.emitChange()})}return t}(),t.prototype.flush=function(){function t(){var t=this.serialize(f.snapshot(this));return this.recycle(),t}return t}(),t.prototype.bootstrap=function(){function t(t){f.setAppState(this,t,function(t,e){t.lifecycle("bootstrap",e),t.emitChange()})}return t}(),t.prototype.prepare=function(){function t(t,e){var n={};if(!t.displayName)throw new ReferenceError("Store provided does not have a name");return n[t.displayName]=e,this.serialize(n)}return t}(),t.prototype.addActions=function(){function t(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];this.actions[t]=Array.isArray(e)?this.generateActions.apply(this,e):this.createActions.apply(this,[e].concat(r))}return t}(),t.prototype.addStore=function(){function t(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];this.createStore.apply(this,[e,t].concat(r))}return t}(),t.prototype.getActions=function(){function t(t){return this.actions[t]}return t}(),t.prototype.getStore=function(){function t(t){return this.stores[t]}return t}(),t.debug=function(){function t(t,e,n){var r="alt.js.org",o=n;return o||"undefined"==typeof window||(o=window),"undefined"!=typeof o&&(o[r]=o[r]||[],o[r].push({name:t,alt:e})),e}return t}(),t}();e.default=O,t.exports=e.default},187:function(t,e,n){t.exports.Dispatcher=n(188)},188:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var o=n(189),i="ID_",s=function(){function t(){r(this,t),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return t.prototype.register=function(t){var e=i+this._lastID++;return this._callbacks[e]=t,e},t.prototype.unregister=function(t){this._callbacks[t]?void 0:o(!1),delete this._callbacks[t]},t.prototype.waitFor=function(t){this._isDispatching?void 0:o(!1);for(var e=0;e<t.length;e++){var n=t[e];this._isPending[n]?this._isHandled[n]?void 0:o(!1):(this._callbacks[n]?void 0:o(!1),this._invokeCallback(n))}},t.prototype.dispatch=function(t){this._isDispatching?o(!1):void 0,this._startDispatching(t);try{for(var e in this._callbacks)this._isPending[e]||this._invokeCallback(e)}finally{this._stopDispatching()}},t.prototype.isDispatching=function(){return this._isDispatching},t.prototype._invokeCallback=function(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0},t.prototype._startDispatching=function(t){for(var e in this._callbacks)this._isPending[e]=!1,this._isHandled[e]=!1;this._pendingPayload=t,this._isDispatching=!0},t.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},t}();t.exports=s},189:function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,a],f=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[f++]}))}throw c.framesToPop=1,c}};t.exports=r},190:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e,n){var r=t.deserialize(e);u.eachObject(function(e,o){var i=t.stores[e];i&&!function(){var t=i.StoreModel.config,s=i.state;t.onDeserialize&&(r[e]=t.onDeserialize(o)||o),u.isMutableObject(s)?(u.eachObject(function(t){return delete s[t]},[s]),u.assign(s,r[e])):i.state=r[e],n(i,i.state)}()},[r])}function i(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],n=e.length?e:Object.keys(t.stores);return n.reduce(function(e,n){var r=n.displayName||n,o=t.stores[r],i=o.StoreModel.config;o.lifecycle("snapshot");var s=i.onSerialize&&i.onSerialize(o.state);return e[r]=s?s:o.getState(),e},{})}function s(t,e){var n=t.deserialize(t.serialize(t.stores[e].state));t._initSnapshot[e]=n,t._lastSnapshot[e]=n}function a(t,e,n){return n.reduce(function(t,n){var r=n.displayName||n;if(!e[r])throw new ReferenceError(String(r)+" is not a valid store");return t[r]=e[r],t},{})}Object.defineProperty(e,"__esModule",{value:!0}),e.setAppState=o,e.snapshot=i,e.saveInitialSnapshot=s,e.filterSnapshots=a;var c=n(191),u=r(c)},191:function(t,e){"use strict";function n(t){var e=t.constructor;return!!t&&"[object Object]"===Object.prototype.toString.call(t)&&i(e)&&!Object.isFrozen(t)&&(e instanceof e||"AltStore"===t.type)}function r(t,e){e.forEach(function(e){Object.keys(Object(e)).forEach(function(n){t(n,e[n])})})}function o(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return r(function(e,n){return t[e]=n},n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.isMutableObject=n,e.eachObject=r,e.assign=o;var i=e.isFunction=function(t){return"function"==typeof t}},192:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e,n){if(n){var r=e.StoreModel.config,o=v.isFunction(n)?n(e.state):n;e.state=r.setState.call(t,e.state,o),t.alt.dispatcher.isDispatching()||t.emitChange()}}function u(t,e,n,r){return v.assign(t,m.default,{displayName:n,alt:e,dispatcher:e.dispatcher,preventDefault:function(){function t(){this.getInstance().preventDefault=!0}return t}(),boundListeners:[],lifecycleEvents:{},actionListeners:{},publicMethods:{},handlesOwnErrors:!1},r)}function f(t,e){e.config=v.assign({getState:function(){function t(t){return Array.isArray(t)?t.slice():v.isMutableObject(t)?v.assign({},t):t}return t}(),setState:function(){function t(t,e){return v.isMutableObject(e)?v.assign(t,e):e}return t}()},t,e.config)}function l(t,e){return t.reduce(function(t,e){return e(t)},e)}function p(t,e,n){var r=void 0,o=u({},t,n,v.assign({getInstance:function(){function t(){return r}return t}(),setState:function(){function t(t){c(this,r,t)}return t}()},e));return o.bindListeners&&m.default.bindListeners.call(o,o.bindListeners),o.observe&&m.default.bindListeners.call(o,o.observe(t)),o.lifecycle&&v.eachObject(function(t,e){m.default.on.call(o,t,e)},[o.lifecycle]),r=v.assign(new O.default(t,o,void 0!==o.state?o.state:{},e),o.publicMethods,{displayName:n,config:e.config})}function h(t,e,n){var r=void 0,o=e.config,f=function(t){function e(){i(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return s(this,t.call.apply(t,[this].concat(r)))}return a(e,t),e}(e);u(f.prototype,t,n,{type:"AltStore",getInstance:function(){function t(){return r}return t}(),setState:function(){function t(t){c(this,r,t)}return t}()});for(var l=arguments.length,p=Array(l>3?l-3:0),h=3;h<l;h++)p[h-3]=arguments[h];var d=new(Function.prototype.bind.apply(f,[null].concat(p)));return o.bindListeners&&d.bindListeners(o.bindListeners),o.datasource&&d.registerAsync(o.datasource),r=v.assign(new O.default(t,d,void 0!==d.state?d.state:d,e),y.getInternalMethods(e),o.publicMethods,{displayName:n})}Object.defineProperty(e,"__esModule",{value:!0}),e.createStoreConfig=f,e.transformStore=l,e.createStoreFromObject=p,e.createStoreFromClass=h;var d=n(193),y=o(d),b=n(191),v=o(b),g=n(194),O=r(g),_=n(196),m=r(_)},193:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t,e){var n=e?v:b,r=e?t.prototype:t;return Object.getOwnPropertyNames(r).reduce(function(t,e){return n.indexOf(e)!==-1?t:(t[e]=r[e],t)},{})}function i(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t===Function.prototype?e:i(Object.getPrototypeOf(t),y.assign(o(t,!0),e))}function s(t){"undefined"!=typeof console&&console.warn(new ReferenceError(t))}function a(t,e){for(var n=0,r=e;Object.hasOwnProperty.call(t,r);)r=e+String(++n);return r}function c(t){return t.replace(/[a-z]([A-Z])/g,function(t){return String(t[0])+"_"+String(t[1].toLowerCase())}).toUpperCase()}function u(t){if(void 0===t)return null;for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.length?[t].concat(n):t}function f(t,e,n,r){return{type:e,payload:n,meta:h({dispatchId:t},r),id:t,action:e,data:n,details:r}}function l(t,e,n,r){var o=e.dispatch(n);if(void 0===o)return null;var i=e.id,s=i,a=i,c={id:i,namespace:s,name:a},u=function(t){return r.dispatch(i,t,c)};return y.isFunction(o)?o(u,r):r.dispatcher.dispatch(f(t,i,o,c))}function p(){}Object.defineProperty(e,"__esModule",{value:!0});var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.getInternalMethods=o,e.getPrototypeChain=i,e.warn=s,e.uid=a,e.formatAsConstant=c,e.dispatchIdentity=u,e.fsa=f,e.dispatch=l;var d=n(191),y=r(d),b=Object.getOwnPropertyNames(p),v=Object.getOwnPropertyNames(p.prototype)},194:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(191),a=o(s),c=n(195),u=r(c),f=function(){function t(e,n,r,o){var s=this;i(this,t);var c=n.lifecycleEvents;this.transmitter=(0,u.default)(),this.lifecycle=function(t,e){c[t]&&c[t].publish(e)},this.state=r,this.alt=e,this.preventDefault=!1,this.displayName=n.displayName,this.boundListeners=n.boundListeners,this.StoreModel=o,this.reduce=n.reduce||function(t){return t},this.subscriptions=[];var f=n.output||function(t){return t};this.emitChange=function(){return s.transmitter.publish(f(s.state))};var l=function(t,e){try{return t()}catch(t){if(n.handlesOwnErrors)return s.lifecycle("error",{error:t,payload:e,state:s.state}),!1;throw t}};a.assign(this,n.publicMethods),this.dispatchToken=e.dispatcher.register(function(t){s.preventDefault=!1,s.lifecycle("beforeEach",{payload:t,state:s.state});var e=n.actionListeners[t.action];if(e||n.otherwise){var r=void 0;r=e?l(function(){return e.filter(Boolean).every(function(e){return e.call(n,t.data,t.action)!==!1})},t):l(function(){return n.otherwise(t.data,t.action)},t),r===!1||s.preventDefault||s.emitChange()}n.reduce&&(l(function(){var e=n.reduce(s.state,t);void 0!==e&&(s.state=e)},t),s.preventDefault||s.emitChange()),s.lifecycle("afterEach",{payload:t,state:s.state})}),this.lifecycle("init")}return t.prototype.listen=function(){function t(t){var e=this;if(!a.isFunction(t))throw new TypeError("listen expects a function");var n=this.transmitter.subscribe(t),r=n.dispose;return this.subscriptions.push({cb:t,dispose:r}),function(){e.lifecycle("unlisten"),r()}}return t}(),t.prototype.unlisten=function(){function t(t){this.lifecycle("unlisten"),this.subscriptions.filter(function(e){return e.cb===t}).forEach(function(t){return t.dispose()})}return t}(),t.prototype.getState=function(){function t(){return this.StoreModel.config.getState.call(this,this.state)}return t}(),t}();e.default=f,t.exports=e.default},195:function(t,e){"use strict";function n(){var t=[],e=!1,n={},r=function(r){var o=t.indexOf(r);if(!(o<0))return e?void(n[o]=r):void t.splice(o,1)},o=function(e){var n=(t.push(e),function(){return r(e)});return{dispose:n}},i=function(){for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];e=!0;try{t.forEach(function(t,e){return n[e]||t.apply(void 0,i)})}finally{e=!1,Object.keys(n).forEach(function(t){return r(n[t])}),n={}}};return{publish:i,subscribe:o,$subscriptions:t}}t.exports=n},196:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(195),s=o(i),a=n(191),c=r(a),u={waitFor:function(){function t(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!e.length)throw new ReferenceError("Dispatch tokens not provided");var r=e;1===e.length&&(r=Array.isArray(e[0])?e[0]:e);var o=r.map(function(t){return t.dispatchToken||t});this.dispatcher.waitFor(o)}return t}(),exportAsync:function(){function t(t){this.registerAsync(t)}return t}(),registerAsync:function(){function t(t){var e=this,n=0,r=c.isFunction(t)?t(this.alt):t,o=Object.keys(r).reduce(function(t,o){var i=r[o],s=c.isFunction(i)?i(e):i,a=["success","error","loading"];return a.forEach(function(t){if(s[t]&&!s[t].id)throw new Error(String(t)+" handler must be an action function")}),t[o]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=e.getInstance().getState(),a=s.local&&s.local.apply(s,[i].concat(r)),c=s.shouldFetch?s.shouldFetch.apply(s,[i].concat(r)):null==a,u=s.interceptResponse||function(t){return t},f=function(){function t(t,o){return function(i){var s=function(){function e(){if(n-=1,t(u(i,t,r)),o)throw i;return i}return e}();return e.alt.trapAsync?function(){return s()}:s()}}return t}();return c?(n+=1,s.loading&&s.loading(u(null,s.loading,r)),s.remote.apply(s,[i].concat(r)).then(f(s.success),f(s.error,1))):(e.emitChange(),a)},t},{});this.exportPublicMethods(o),this.exportPublicMethods({isLoading:function(){function t(){return n>0}return t}()})}return t}(),exportPublicMethods:function(){function t(t){var e=this;c.eachObject(function(t,n){if(!c.isFunction(n))throw new TypeError("exportPublicMethods expects a function");e.publicMethods[t]=n},[t])}return t}(),emitChange:function(){function t(){this.getInstance().emitChange()}return t}(),on:function(){function t(t,e){"error"===t&&(this.handlesOwnErrors=!0);var n=this.lifecycleEvents[t]||(0,s.default)();return this.lifecycleEvents[t]=n,n.subscribe(e.bind(this))}return t}(),bindAction:function(){function t(t,e){if(!t)throw new ReferenceError("Invalid action reference passed in");if(!c.isFunction(e))throw new TypeError("bindAction expects a function");var n=t.id?t.id:t;this.actionListeners[n]=this.actionListeners[n]||[],this.actionListeners[n].push(e.bind(this)),this.boundListeners.push(n)}return t}(),bindActions:function(){function t(t){var e=this;c.eachObject(function(t,n){var r=/./,o=t.replace(r,function(t){return"on"+String(t[0].toUpperCase())});if(e[t]&&e[o])throw new ReferenceError("You have multiple action handlers bound to an action: "+(String(t)+" and "+String(o)));var i=e[t]||e[o];i&&e.bindAction(n,i)},[t]);
}return t}(),bindListeners:function(){function t(t){var e=this;c.eachObject(function(t,n){var r=e[t];if(!r)throw new ReferenceError(String(t)+" defined but does not exist in "+String(e.displayName));Array.isArray(n)?n.forEach(function(t){e.bindAction(t,r)}):e.bindAction(n,r)},[t])}return t}()};e.default=u,t.exports=e.default},197:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e,n,r,o){var i=u.uid(t._actionsRegistry,String(e)+"."+String(n));t._actionsRegistry[i]=1;var s={id:i,namespace:e,name:n},c=function(e){return t.dispatch(i,e,s)},f=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var s=r.apply(o,n),f=s;return void 0===s||(0,l.default)(s)||(a.isFunction(s)?f=s(c,t):c(s)),void 0===s&&u.warn("An action was called but nothing was dispatched"),f};f.defer=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return setTimeout(function(){return f.apply(null,e)})},f.id=i,f.data=s;var p=t.actions[e],h=u.uid(p,n);p[h]=f;var d=u.formatAsConstant(h);return p[d]=i,f}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var s=n(191),a=o(s),c=n(193),u=o(c),f=n(198),l=r(f);t.exports=e.default},198:function(t,e){function n(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}t.exports=n},199:function(t,e){"use strict";function n(){var t=this;this.dispatcher.register(function(e){var n=Object.keys(t.alt.stores).reduce(function(e,n){return e.push(t.alt.stores[n].dispatchToken),e},[]);t.waitFor(n),t.setState({payload:e}),t.emitChange()})}function r(t){return t.FinalStore?t.FinalStore:t.FinalStore=t.createUnsavedStore(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,t.exports=e.default},200:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(201),i=r(o),s=n(202),a=r(s),c=n(203),u=r(c),f=n(!function(){var t=new Error('Cannot find module "../../stores/LaneStore"');throw t.code="MODULE_NOT_FOUND",t}()),l=r(f);e.default=function(t){t.addStore("NoteStore",u.default),t.addStore("LaneStore",l.default),(0,a.default)(t,(0,i.default)(localStorage),"app")}},201:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return{get:function(e){try{return JSON.parse(t.getItem(e))}catch(t){return null}},set:function(e,n){t.setItem(e,JSON.stringify(n))}}}},202:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){try{t.bootstrap(e.get(n))}catch(t){console.error("Failed to bootstrap data",t)}t.FinalStore.listen(function(){e.get("debug")||e.set(n,t.takeSnapshot())})}},203:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(204),c=r(a),u=function(){function t(){o(this,t),this.bindActions(c.default),this.notes=[]}return s(t,[{key:"create",value:function(t){this.setState({notes:this.notes.concat(t)})}},{key:"update",value:function(t){this.setState({notes:this.notes.map(function(e){return e.id===t.id?i({},e,t):e})})}},{key:"delete",value:function(t){this.setState({notes:this.notes.filter(function(e){return e.id!==t})})}}]),t}();e.default=u},204:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(185),i=r(o);e.default=i.default.generateActions("create","update","delete")}});
//# sourceMappingURL=app.5224ba801465205a120a.js.map
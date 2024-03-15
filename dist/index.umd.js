!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("invariant"),require("react-transition-group")):"function"==typeof define&&define.amd?define(["exports","react","invariant","react-transition-group"],t):t((e||self).reactStepProgressBar={},e.react,e.invariant,e.reactTransitionGroup)}(this,function(e,t,n,r){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var i=/*#__PURE__*/a(t),s=/*#__PURE__*/o(n);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}var d={scale:{entering:{transform:"translateX(-50%) scale(1.5)"},entered:{transform:"translateX(-50%) scale(1)"},exiting:{transform:"translateX(-50%) scale(1.5)"},exited:{transform:"translateX(-50%) scale(1)"}},rotate:{entering:{transform:"translateX(-50%) rotate(360deg)"},entered:{transform:"translateX(-50%) rotate(0deg)"},exiting:{transform:"translateX(-50%) rotate(0deg)"},exited:{transform:"translateX(-50%) rotate(360deg)"}},skew:{entering:{transform:"translateX(-50%) skewX(20deg)"},entered:{transform:"translateX(-50%) skewX(0deg)"},exiting:{transform:"translateX(-50%) skewX(20deg)"},exited:{transform:"translateX(-50%) skewX(0deg)"}}};function p(e){return(e>100||e<0||"number"!=typeof e)&&console.warn("[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: "+e+")."),Math.min(100,Math.max(e,0))}var f=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.accomplished,n=e.index,o=e.children,a=e.transition,u=void 0===a?null:a,c=e.transitionDuration,f=void 0===c?300:c,h=p(e.position),g={left:h+"%",transitionDuration:f+"ms"};/*#__PURE__*/return i.createElement(r.Transition,{in:t,timeout:f},function(e){return u&&(s.default(null!=d[u],u+" is not listed in the built-in transitions."),g=l({},g,d[u][e])),/*#__PURE__*/i.createElement("div",{className:"RSPBstep",style:g},o({accomplished:t,position:h,transitionState:e,index:n}))})},t}(i.Component),h=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.percent,n=e.children,r=e.stepPositions,o=void 0===r?[]:r,a=e.unfilledBackground,l=void 0===a?null:a,u=e.filledBackground,c=void 0===u?null:u,d=e.width,f=void 0===d?null:d,h=e.height,g=void 0===h?null:h,m=e.hasStepZero,v=void 0===m||m,y=e.text,b=void 0===y?null:y;s.default(!(o.length>0&&o.length!==i.Children.count(n)),"When specifying a stepPositions props, the number of children must match the length of the positions array.");var X=p(t);/*#__PURE__*/return i.createElement("div",{className:"RSPBprogressBar",style:{background:l,width:f,height:g}},i.Children.map(n,function(e,t){var r=o.length>0?o[t]:function(e,t,n){return n?100/(e-1)*t:100/e*(t+1)}(i.Children.count(n),t,v);/*#__PURE__*/return i.cloneElement(e,{accomplished:r<=X,position:r,index:t})}),b?/*#__PURE__*/i.createElement("div",{className:"RSPBprogressBarText"},b):null,/*#__PURE__*/i.createElement("div",{className:"RSPBprogression",style:{background:c,width:X+"%"}}))},t}(i.Component);e.ProgressBar=h,e.Step=f});
//# sourceMappingURL=index.umd.js.map
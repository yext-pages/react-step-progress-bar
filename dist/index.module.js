import*as t from"react";import e from"invariant";import{Transition as n}from"react-transition-group";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}var i={scale:{entering:{transform:"translateX(-50%) scale(1.5)"},entered:{transform:"translateX(-50%) scale(1)"},exiting:{transform:"translateX(-50%) scale(1.5)"},exited:{transform:"translateX(-50%) scale(1)"}},rotate:{entering:{transform:"translateX(-50%) rotate(360deg)"},entered:{transform:"translateX(-50%) rotate(0deg)"},exiting:{transform:"translateX(-50%) rotate(0deg)"},exited:{transform:"translateX(-50%) rotate(360deg)"}},skew:{entering:{transform:"translateX(-50%) skewX(20deg)"},entered:{transform:"translateX(-50%) skewX(0deg)"},exiting:{transform:"translateX(-50%) skewX(20deg)"},exited:{transform:"translateX(-50%) skewX(0deg)"}}};function s(t){return(t>100||t<0||"number"!=typeof t)&&console.warn("[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: "+t+")."),Math.min(100,Math.max(t,0))}var l=/*#__PURE__*/function(a){function l(){return a.apply(this,arguments)||this}return o(l,a),l.prototype.render=function(){var o=this.props,a=o.accomplished,l=o.index,c=o.children,p=o.transition,u=void 0===p?null:p,d=o.transitionDuration,m=void 0===d?300:d,f=s(o.position),h={left:f+"%",transitionDuration:m+"ms"};/*#__PURE__*/return t.createElement(n,{in:a,timeout:m},function(n){return u&&(e(null!=i[u],u+" is not listed in the built-in transitions."),h=r({},h,i[u][n])),/*#__PURE__*/t.createElement("div",{className:"RSPBstep",style:h},c({accomplished:a,position:f,transitionState:n,index:l}))})},l}(t.Component),c=/*#__PURE__*/function(n){function r(){return n.apply(this,arguments)||this}return o(r,n),r.prototype.render=function(){var n=this.props,r=n.percent,o=n.children,a=n.stepPositions,i=void 0===a?[]:a,l=n.unfilledBackground,c=void 0===l?null:l,p=n.filledBackground,u=void 0===p?null:p,d=n.width,m=void 0===d?null:d,f=n.height,h=void 0===f?null:f,g=n.hasStepZero,v=void 0===g||g,y=n.text,X=void 0===y?null:y;e(!(i.length>0&&i.length!==t.Children.count(o)),"When specifying a stepPositions props, the number of children must match the length of the positions array.");var b=s(r);/*#__PURE__*/return t.createElement("div",{className:"RSPBprogressBar",style:{background:c,width:m,height:h}},t.Children.map(o,function(e,n){var r=i.length>0?i[n]:function(t,e,n){return n?100/(t-1)*e:100/t*(e+1)}(t.Children.count(o),n,v);/*#__PURE__*/return t.cloneElement(e,{accomplished:r<=b,position:r,index:n})}),X?/*#__PURE__*/t.createElement("div",{className:"RSPBprogressBarText"},X):null,/*#__PURE__*/t.createElement("div",{className:"RSPBprogression",style:{background:u,width:b+"%"}}))},r}(t.Component);export{c as ProgressBar,l as Step};
//# sourceMappingURL=index.module.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{120:function(t,i,e){},228:function(t,i,e){"use strict";var n=e(120);e.n(n).a},229:function(t,i,e){},280:function(t,i,e){"use strict";e.r(i);e(53);var n={props:{zoom:{type:Number,default:0}},data:function(){return{focus:!1}},mounted:function(){window.addEventListener("mouseup",this.onStop,{passive:!1}),window.addEventListener("mousemove",this.onDrag,{passive:!1}),window.addEventListener("touchmove",this.onDrag,{passive:!1}),window.addEventListener("touchend",this.onStop,{passive:!1})},destroyed:function(){window.removeEventListener("mouseup",this.onStop),window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("touchmove",this.onDrag),window.removeEventListener("touchend",this.onStop)},methods:{onDrag:function(t){if(this.focus){var i=t.touches?t.touches[0].clientX:t.clientX,e=this.$refs.line;if(e){var n=e.getBoundingClientRect(),o=n.left,s=n.width;this.$emit("change",Math.min(1,Math.max(0,i-o)/s))}t.preventDefault&&t.preventDefault()}},onStop:function(){this.focus=!1},onStart:function(t){this.focus=!0,this.onDrag(t)}}},o=(e(228),e(1)),s=Object(o.a)(n,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"twitter-navigation"},[e("div",{staticClass:"twitter-navigation__wrapper"},[e("div",{staticClass:"twitter-navigation__zoom-icon twitter-navigation__zoom-icon--left"},[e("svg",{staticClass:"r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",attrs:{viewBox:"0 0 24 24"}},[e("g",[e("path",{attrs:{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"}}),e("path",{attrs:{d:"M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z"}})])])]),t._v(" "),e("div",{ref:"line",staticClass:"twitter-navigation__line-wrapper",on:{mousedown:t.onStart,touchstart:t.onStart}},[e("div",{staticClass:"twitter-navigation__line"},[e("div",{staticClass:"twitter-navigation__fill",style:{flexGrow:t.zoom}}),t._v(" "),e("div",{staticClass:"twitter-navigation__circle",class:{"twitter-navigation__circle--focus":t.focus},style:{left:100*t.zoom+"%"}},[e("div",{staticClass:"twitter-navigation__inner-circle",class:{"twitter-navigation__inner-circle--focus":t.focus}})])])]),t._v(" "),e("div",{staticClass:"twitter-navigation__zoom-icon twitter-navigation__zoom-icon--right"},[e("svg",{staticClass:"r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",attrs:{viewBox:"0 0 24 24"}},[e("g",[e("path",{attrs:{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"}}),e("path",{attrs:{d:"M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z"}})])])])])])},[],!1,null,null,null);i.default=s.exports},418:function(t,i,e){t.exports=e.p+"assets/img/girl-in-hat.ce12e0ac.jpg"},419:function(t,i,e){"use strict";var n=e(229);e.n(n).a},458:function(t,i,e){"use strict";e.r(i);var n=e(12),o=e(280),s={components:{Cropper:n.c,Navigation:o.default},data:function(){return{zoom:0,img:e(418)}},methods:{defaultSize:function(t){var i=t.imageSize;return i.width<i.height?{width:i.width,height:i.width}:{width:i.height,height:i.height}},fitVisibleArea:function(t){var i=t.visibleArea,e=t.boundaries,n=t.coordinates,o=(t.coefficient,e.width/e.height);if(e.width/e.height<n.width/n.height){var s=n.width/(e.width-48),a=n.width+48*s,r=a/o;return{width:a,height:r,left:i.left+(i.width-a)/2,top:i.top+(i.height-r)/2}}var h=n.height/(e.height-48),c=n.height+48*h,d=c*o;return{width:d,height:c,left:i.left+(i.width-d)/2,top:i.top+(i.height-c)/2}},defaultVisibleArea:function(t){var i=t.imageSize,e=t.boundaries,n=e.width/e.height,o=Math.max(0,e.width-e.height)+48,s=e.width-o,a={};return i.height>i.width?(a.width=e.width/s*i.width,a.height=a.width/n):(a.height=e.height/s*i.height,a.width=a.height*n),{left:i.width/2-a.width/2,top:i.height/2-a.height/2,width:a.width,height:a.height}},pixelsRestriction:function(t){return{minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight}},onChange:function(t){var i=this.$refs.cropper;i&&(i.imageSize.height<i.imageSize.width?this.zoom=(i.imageSize.height-i.coordinates.height)/(i.imageSize.height-i.sizeRestrictions.minHeight):this.zoom=(i.imageSize.width-i.coordinates.width)/(i.imageSize.width-i.sizeRestrictions.minWidth))},onZoom:function(t){var i=this.$refs.cropper;if(i)if(i.imageSize.height<i.imageSize.width){var e=i.sizeRestrictions.minHeight;i.zoom(((1-this.zoom)*i.imageSize.height+e)/((1-t)*i.imageSize.height+e))}else{var n=i.sizeRestrictions.minWidth;i.zoom(((1-this.zoom)*i.imageSize.width+n)/((1-t)*i.imageSize.width+n))}}}},a=(e(419),e(1)),r=Object(a.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("cropper",{ref:"cropper",staticClass:"twitter-cropper",attrs:{"background-class":"twitter-cropper__background","image-restriction":"stencil","default-boundaries":"fill","stencil-props":{handlers:{},movable:!1,scalable:!1,aspectRatio:1,previewClass:"twitter-cropper__stencil"},canvas:!1,debounce:!1,"fit-visible-area":t.fitVisibleArea,"default-visible-area":t.defaultVisibleArea,"default-size":t.defaultSize,"size-restrictions-algorithm":t.pixelsRestriction,"min-width":150,"min-height":150,src:t.img},on:{change:t.onChange}}),t._v(" "),e("Navigation",{attrs:{zoom:t.zoom},on:{change:t.onZoom}})],1)},[],!1,null,null,null);i.default=r.exports}}]);
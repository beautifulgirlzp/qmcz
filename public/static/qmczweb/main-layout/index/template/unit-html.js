define(function(require, exports, module){return function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {_.each(unit,function(item,index){;__p += '<a href="' +((__t = (item.url)) == null ? '' : __t) +'" title="' +((__t = (item.name)) == null ? '' : __t) +'"><img src="' +((__t = (item.img)) == null ? '' : __t) +'" alt=""></a>';});}return __p}});
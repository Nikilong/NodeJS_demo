/*!
 * Vux v0.1.3-rc10 (https://vux.li)
 * Licensed under the MIT license
 * add collapse by dyg in 20160907
 */
! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.vuxGroup = e() : t.vuxGroup = e()
}(this, function() {
	return function(t) {
		function e(r) {
			if (o[r]) return o[r].exports;
			var i = o[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
		}
		var o = {};
		return e.m = t, e.c = o, e.p = "", e(0)
	}([function(t, e, o) {
		t.exports = o(4)
	}, function(t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = {
			computed: {
				klass: function() {
					var cls = this.state || "";
					if(this.active) cls += " " + "show";
					else cls += " " + "hidden";
					return cls;
				}
			},
			props: {
				index: String,
				state: String,
				title: String,
				titleColor: String,
				labelWidth: String,
				labelAlign: String,
				labelMarginRight: String,
				gutter: String,
				collapse: Boolean,
				active: {
					type: Boolean,
					default: !0
				}
			}
		}
	}, function(t, e) {}, function(t, e) {
		t.exports = '<div :class="klass"><div v-if=title&&collapse class="weui_cell vux-tap-active" @click="active=!active"> <div class=weui_cell_hd> <div class=order>{{index}}</div> </div> <div class=weui_cell_ft> <div class=icon :class="{\'iconfont icon-xiangshang\':active,\'iconfont icon-xiangxia\':!active}"></div> </div> <div class=weui_cell_bd class=weui_cell_primary> <p>{{title}}</p> </div> </div> <div class=weui_cells_title v-if=title&&!collapse :style={color:titleColor} v-html=title></div> <div v-show="active" class=weui_cells :class="{\'vux-no-group-title\':!title}" :style="{marginTop: gutter}"> <slot></slot> </div> </div>'
	}, function(t, e, o) {
		var r, i;
		o(2), r = o(1), i = o(3), t.exports = r || {}, t.exports.__esModule && (t.exports = t.exports["default"]), i && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = i)
	}])
});
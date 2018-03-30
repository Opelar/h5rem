/**
 * create by opelar
 * images loaded
 * ctime: 2018/02/02
 */

if (!window.console) window.console = { log: function() {} };

if (typeof getComputedStyle == "undefined") {
  if (document.body.currentStyle) {
    window.getComputedStyle = function(el) {
      return el.currentStyle;
    };
  } else {
    window.getComputedStyle = {};
  }
}

(function() {
  window.__zoom = 1;

  (function() {
    var validArr = "," + [0.875, 1, 1.125, 1.25, 1.375].join(",") + ",";
    var match = window.location.href.match(/winzoom=(\d+(?:\.\d+)?)/);
    if (match && match[1]) {
      var winzoom = parseFloat(match[1]);
      if (validArr.indexOf("," + winzoom + ",") >= 0) {
        window.__zoom = winzoom;
      }
    }
  })();

  var isIE = false;

  if (typeof version != "undefined" && version >= 6 && version <= 9) {
    isIE = true;
  }

  var getMaxWith = function() {
    var container = document.getElementById("img-content");
    var max_width = container.offsetWidth;
    var container_padding = 0;
    var container_style = getComputedStyle(container);
    container_padding =
      parseFloat(container_style.paddingLeft) +
      parseFloat(container_style.paddingRight);
    max_width -= container_padding;
    var ua = navigator.userAgent.toLowerCase();
    var re = new RegExp("msie ([0-9]+[.0-9]*)");
    var version;
    if (re.exec(ua) != null) {
      version = parseInt(RegExp.$1);
    }
    var isIE = false;
    if (typeof version != "undefined" && version >= 6 && version <= 9) {
      isIE = true;
    }
    if (!max_width) {
      max_width = window.innerWidth - 30;
    }
    return max_width;
  };

  var getParentWidth = function(dom) {
    var parent_width = 0;
    var parent = dom.parentNode;
    var outerWidth = 0;
    while (true) {
      if (!parent || parent.nodeType != 1) break;
      var parent_style = getComputedStyle(parent);
      if (!parent_style) break;
      parent_width =
        parent.clientWidth -
        parseFloat(parent_style.paddingLeft) -
        parseFloat(parent_style.paddingRight) -
        outerWidth;
      if (parent_width > 0) break;
      outerWidth +=
        parseFloat(parent_style.paddingLeft) +
        parseFloat(parent_style.paddingRight) +
        parseFloat(parent_style.marginLeft) +
        parseFloat(parent_style.marginRight) +
        parseFloat(parent_style.borderLeftWidth) +
        parseFloat(parent_style.borderRightWidth);
      parent = parent.parentNode;
    }
    return parent_width;
  };
  var getOuterW = function(dom) {
    var style = getComputedStyle(dom),
      w = 0;
    if (!!style) {
      w =
        parseFloat(style.paddingLeft) +
        parseFloat(style.paddingRight) +
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth);
    }
    return w;
  };

  var getOuterH = function(dom) {
    var style = getComputedStyle(dom),
      h = 0;
    if (!!style) {
      h =
        parseFloat(style.paddingTop) +
        parseFloat(style.paddingBottom) +
        parseFloat(style.borderTopWidth) +
        parseFloat(style.borderBottomWidth);
    }
    return h;
  };

  var insertAfter = function(dom, afterDom) {
    var _p = afterDom.parentNode;
    if (!_p) {
      return;
    }
    if (_p.lastChild === afterDom) {
      _p.appendChild(dom);
    } else {
      _p.insertBefore(dom, afterDom.nextSibling);
    }
  };

  var getQuery = function(name, url) {
    var u = arguments[1] || window.location.search,
      reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
      r = u.substr(u.indexOf("?") + 1).match(reg);
    return r != null ? r[2] : "";
  };

  (function() {
    var images = document.getElementsByTagName("img");
    var length = images.length;
    var max_width = getMaxWith();
    for (var i = 0; i < length; ++i) {
      var src_ = images[i].getAttribute("data-src");
      var realSrc = images[i].getAttribute("src");
      if (!src_ || realSrc) continue;
      var width_ = 1 * images[i].getAttribute("data-w") || max_width;
      var ratio_ = 1 * images[i].getAttribute("data-ratio");
      var height = 100;
      if (ratio_ && ratio_ > 0) {
        var img_style = getComputedStyle(images[i]);
        var init_width = images[i].style.width;

        if (init_width) {
          images[i].setAttribute("_width", init_width);
          if (init_width != "auto") width_ = parseFloat(img_style.width);
        }
        var parent_width = getParentWidth(images[i]) || max_width;
        var width = width_ > parent_width ? parent_width : width_;
        var img_padding_border = getOuterW(images[i]) || 0;
        var img_padding_border_top_bottom = getOuterH(images[i]) || 0;
        height =
          (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
        images[i].style.cssText += ";width: " + width + "px !important;";
        if (isIE) {
          var url = images[i].getAttribute("data-src");
          images[i].src = url;
        } else {
          if (width > 40 && height > 40) {
            images[i].className += " img_loading";
          }
          images[i].src =
            "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==";
        }
      } else {
        images[i].style.cssText += ";visibility: hidden !important;";
      }
      images[i].style.cssText += ";height: " + height + "px !important;";
    }
  })();
})();

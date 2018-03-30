var imgs = $(".cover");
var default_img = $(".img_loading");
var c = 0;

var arrSrc = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518056870&di=0a33474854a2cb32b6bd1a4626f7ec23&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F589437377c721.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517462348881&di=944f4f89ac43b6b52e237a0a1e2b7942&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F35a85edf8db1cb1313f13781da54564e93584b83.jpg",
  "http://img.redocn.com/201208/1/2111510_13438068583IaI.jpg"
]; 

//提取所有的url路径
var arrImg = [];

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("load", function() {
      // debugger;
      default_img[c].style.display = "none";
      console.log("第 " + c + " 加载完毕");
      c += 1;
    }, false);

  imgs[i].src = arrSrc[i];
}

### 通用 px2rem 布局方案

使用 [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) 和 `gulp` 自动将 `px` 转为 `rem`

`gulp` 配置 px2rem，假如设计稿宽度为 `750px`

```javascript
var processors = [px2rem({ remUnit: 75 })];
```

### 设置 `html` 的 `font-size`, 也可以使用手淘的 `flexble`

```javascript
var screeWidth = window.screen.width;
document.documentElement.style.fontSize = screeWidth / 10 + "px";
```

- 避免手动计算布局
- 自动适配手机各个尺寸的屏幕 


### 启动

- 执行 `gulp & npm start`
- 打开浏览器，`http://localhost:5000/`


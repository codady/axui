# Changelog更新历史

关于AXUI的新增、修改和删除记录均在本文档记录。

## 2025-08-15更新
### 发布v3.1.31版本
* 核心js：https://unpkg.com/@codady/axui@3.1.31/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.31/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.31/dist.zip
### 更新内容
- 修改根节点`rem`值冲突解决办法，增加`--_num-scale`变量以解决rem单位冲突问题。
- 增加`--_rem-1px`变量，默认与1px相同，当改变根字号之后会有变化。
- 增加`--_num-base`变量代替原来的`--_num-root`的意义，而原--_num-root的意义将与--_num-space等变量相同。
- 将原`--_fs-root`变量改为`--_fs-base`。
- 增加`--_num-*-raw`系列CSS变量。
- 为了确保页面缩放正常，将固定的`*rem`值改成与`--_rem-root`相对的值，例如0.7rem改写为calc(var(--_rem-root)*0.7)。

## 2025-08-13更新
### 发布v3.1.30版本
* 核心js：https://unpkg.com/@codady/axui@3.1.30/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.30/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.30/dist.zip
### 更新内容
- 修改`Tree`、`Menu`、`Grade`组件样式，增加若干`CSS`变量，以便于定制风格。
- 修改`Checkbox`、`Radio`、`Checkboxes`、`Radios`组件样式，增加若干`CSS`变量，并增加`inverted`属性，以便于定制风格。


## 2025-08-12更新
### 发布v3.1.29版本
* 核心js：https://unpkg.com/@codady/axui@3.1.29/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.29/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.29/dist.zip
### 更新内容
- 修改`Stats`组件，将属性`dir`改为`flow`,`inverted`属性改为`flipped`，并增加`prefix`和`suffix`属性;
- 修改`--_fs-`开头的大字号变量和`--_lh-`开头的大字号行高，在手机端强制为`24px`。
- 修改`Textarea`、`Input`、`Number`组件中的内置`input`节点背景色为透明。
- 发布了`Marquee`插件v1.0.0，详见NPM：https://www.npmjs.com/package/ax-marquee（CDN地址：https://unpkg.com/ax-marquee@1.0.0/examples/index.html）
- 修改`Line`和`Divider`组件，增加`inverted`属性，可将组件用在深色背景容器中。
- 修改`footer`组件，增加若干`CSS`变量，以便于定制风格。


## 2025-08-08更新
### 发布v3.1.28版本
* 核心js：https://unpkg.com/@codady/axui@3.1.28/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.28/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.28/dist.zip
### 更新内容
- 修改`Stats`组件，增加`--_stats-bg-icon`、`--_stats-c-unit`和`--_stats-c-tips`变量，便于改变主题颜色;
- 修改`rep=image`标签，增加对svg图片的支持。
- 对主要颜色增加`-bs`后缀，意为`background solid`即浅色的非透明背景。
- 对`card`增加`covered`属性。
- 修复`Message`库的`content`参数传递双引号内容时的错误。
- 修复`Fields`组件，同时使用`size`和`shape`时，圆角失效的问题。
- 解决`_ell-hold`无效的问题。
- 新增`--_sd-*`相关的CSS变量。
- 将`_sd-*`相关样式类中的`--_sd`变量改为`--_sd-base`。
- 修复`_tag`对`size`属性无效的问题。
- 修复input组件`size=lg`时`padding`无效问题。
- 对`input`组件增加`shape`属性，可使用方角或圆角的input。
- 修改`Accordion`模块，增加`appear.filled`参数。
- 对`Bullet`组件增加`rep=no`节点，用来表达列表序号。
- 修改`Flag`组件，增加`type=ribbon`和`type=diamond`类型。


## 2025-08-01更新
### 发布v3.1.27版本
* 核心js：https://unpkg.com/@codady/axui@3.1.27/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.27/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.27/dist.zip
### 更新内容
* 上一版本打包出错，重新打包。


## 2025-07-31更新
### 发布v3.1.26版本
* 核心js：https://unpkg.com/@codady/axui@3.1.26/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.26/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.26/dist.zip
### 更新内容
* 修复`Range`组件使用`reset`方法无效的问题。
* 将 `Range` 库的参数从 `aixs` 改为 `flow`，可选值为 `h/v`（水平/垂直）
* 修复`Datetime`组件在手机端下拉年份和月份高度不正确的问题的。
* 修复`Select`组件的工具箱颜色问题
* 修复`Search`组件，使用`shape`属性时报错的问题。
* 修复`Search`组件，使用`shape`、`notable`和`size`属性失效的问题。
* 修复`Swipe`模块中`findSnap`函数的错误。
* `Swipe`模块增加`thumb`参数，用来与其他swipe实例关联。
* 修复`Gesture`模块设置`step.value`无效的问题。
* `Swipe`增加`toLocate`方法，用来直接定位滑块。
* 修复`getEl`和`getEls`函数，允许从`template`节点中取得子节点。
* 修改`Lazy`模块默认的触发时机，目标节点与视口部分交叉即触发。
* 将`inset-`有关定位的样式改为`pos-`。
* 为 `Swipe` 组件新增 `thumb` 参数，支持与其他滑动实例关联。  
* 为 `Swipe` 组件新增 `toLocate` 方法，可直接定位到指定幻灯片位置。  
* 新增多个与 `Viwer` 模块相关的图标，并删除不常用的图标，为图标库减负。  
* 在 `createTools` 方法中新增内置工具名称。  
* 新增 `isChildVisible` 工具函数，用于判断子节点在父容器内是否可见。  
* 将 `Swipe` 和 `Scroll` 库中的参数 `aixs` 更名为 `flow`，可选值为 `h/v`（水平/垂直）。 
* 修复了 `Gesture` 模块中设置 `step.value` 不生效的问题。  
* 移除了 `Swipe` 模块中的 `total.hyphen` 参数，新增 `total.format` 参数以支持用户自定义数据总览的文本格式。  
* 修复了 `Gesture` 模块，使其在水平或垂直翻转状态下仍支持缩放行为。   
* 修复了 `Swipe` 模块在切换幻灯片时自动暂停其他滑动内容中的视频和音频。  
* 优化了 `Swipe` 模块，使 `gap` 和 `divide` 参数在 `slides: 'auto'` 模式下依然生效。  
* 修复了 `c-text-fg`、`c-text-tl`、`c-brief-sd` 和 `c-caption-sd` 的颜色错误问题
* 新增 `Toast` 消息提示库，用于展示实时短消息。[了解更多 ↗](/v3/modules/426.php/)



## 2025-07-01更新
### 发布v3.1.25版本
* 核心js：https://unpkg.com/@codady/axui@3.1.25/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.25/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.25/dist.zip
### 更新内容
* 添加6个新图标：reddit、reddit-f、telegram、telegram-f、login-f、logout-f。
* 修复`Dialog`库，在异步加载内容和show同时进行时，入场动画失效问题。
* 修复`confirm`工具函数，增加dialog参数，允许自定义窗口的属性。
* 修改`button`组件相关样式，增加多个百分比宽度值。
* 优化ajax函数，返回字符串型json数据时优先处理。
* 修复line组件在dashed类型无法显示分割线的问题。
* 修复`good`组件使用`increase`方法未能递增的问题。
* 修复`callout`组件鼠标悬停时进度条反向进行的错误。
* 修复`Valid`库悬浮提示的边距问题。
* 修复`Valid`库对自定义表单域校验始终为fail的问题，改用了防抖校验，以确保所有操作结束之后才进行校验。
* 修复`Upload`库，因为内置了file和text两个原生组件导致重复事件冒泡，阻止`file`组件的change和input事件传播。
* 修复`validTools.parseLength`函数，新增`value`和`label`参数传递原值和别名。
* 修复`validTools.listenSubmit`函数未能正确监听`submit`事件的问题。


## 2025-06-03更新
### 发布v3.1.23版本
* 核心js：https://unpkg.com/@codady/axui@3.1.23/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.23/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.23/dist.zip
### 更新内容
* 将增加`--_white-*`系列样式和`--_black-*`系列样式变量，用于黑白透明度场景。
* 增加与`--_c-text`同源的颜色变量`--_c-text-static`，用来固定显示文本颜色，不受`dark`模式影响。
* 修改`btn`相关样式，增加`inverted`属性，用于深底反色。

## 2025-06-01更新
### 发布v3.1.22版本
* 核心js：https://unpkg.com/@codady/axui@3.1.22/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.22/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.22/dist.zip
### 更新内容
* 新增`ease`系列的动画，可用来替代`slideDown`和`slideUp`动画。
* 新增`--_dir-coef-alt`变量用于详细控制RTL行文布局。
* 修改气泡模块，增加`easeIn`进场动画和`easeOut`出场动画。


## 2025-05-31更新
### 发布v3.1.21版本
* 核心js：https://unpkg.com/@codady/axui@3.1.21/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.21/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.21/dist.zip
### 更新内容
* 调整`avatar`的尺寸，确保其高度尽量与行对齐。
* 修复`twilight`组件，图标不能切换为月亮的问题。


## 2025-05-24更新
### 发布v3.1.20版本
* 核心js：https://unpkg.com/@codady/axui@3.1.20/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.20/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.20/dist.zip
### 更新内容
* 修复部分错误

## 2025-05-23更新
### 发布v3.1.19版本
* 核心js：https://unpkg.com/@codady/axui@3.1.19/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.19/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.19/dist.zip
### 更新内容
* 修复部分错误

## 2025-05-22更新
### 发布v3.1.18版本
* 核心js：https://unpkg.com/@codady/axui@3.1.18/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.18/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.18/dist.zip
### 更新内容
* 修改`type=switch`的复选组件，增加`contained`属性，可使用switch的另一种形态。
* 新增`Pill`组件，用来丰富`tab`切换。


## 2025-05-21更新
### 发布v3.1.17版本
* 核心js：https://unpkg.com/@codady/axui@3.1.17/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.17/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.17/dist.zip
### 更新内容
* 修改`css`文件，增加`r-full`样式类，用来创建全圆角容器。
* 修改`css`文件，修改`--_dur-*`变量和`_dur-*`样式类，取值`0~100`，使之有规律可循。
* 修改`css`文件，增加`--_num-step`变量，用于逐级放大页面。
* 修改`css`文件，将btn组件中的`[grad]`改为`[gradient]`。
* 修改`css`文件，规范css变量命名，将c-bd和bd改为bc，将bd-w改为bw。
* 修改`css`文件，将`_inf`样式类改为全称`_infinite`，并修改对应的js文件。
* 修改`css`文件，将`_text`样式类改为`_t`。
* 修改`upload`模块，将参数`columns`改为`cols`，并设默认值为4。
* 修正上一次更新时遗留的错误。


## 2025-05-19更新
### 发布v3.1.16版本
* 核心js：https://unpkg.com/@codady/axui@3.1.16/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.16/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.16/dist.zip
### 更新内容
* 修改`css`文件，对选择器进行简化处理以缩小文件体积。
* 修改`css`文件，增强对第三方图标库的支持。
* 修改`css`文件的`grid`部分，默认列数设为1，而不是4。
* 修改`css`文件，如果`flex`和`grid`布局同时使用了`_split-*`和`_g-*`样式类，则保持子节点之间的间隙。
* 修改`css`文件，重新调整flex、grid、m、p、br、bc、line、divider的间隙值。
* 修改`css`文件，将rem-caption、em-caption、px-caption变量改成*-lead；将rem-subject、em-subject、px-subject变量改成*-subtitle；将rem-title、em-title、px-title变量改成*-display；改了之后更符合语义化，避免歧义
* 修改`css`文件，调整基准字号，使之有规律可循：16(lead)-24(list)-32(display)-40(input)-48(hitbox)-56(max)。
* 修改`css`文件，将_ell-xxs~xxl的命名方式改成_ell-h[1~6]，更加直观。
* 修改`css`文件，增加`_lh-*`样式类。
* 修改`css`文件，将`masonry`的默认列改为2。
* 修改`Masonry`模块的css和js代码，允许通过css预设`column-gap`。
* 修改`topPixel`函数，增加对css变量的支持。
* 将`ax-heading`组件改成`ax-category`以避免混淆h1、h2这种真正的标题，同时修改相关样式。
* 修改`css`文件，增加`fs-display`和`lh-display`样式类。
* 修改`css`文件，将样式中的`ignore`改为`caption`，表示小型的、不引起注意的意义。
* 修改`css`文件，将`--_lh-h*`变量`em`单位去掉，使用数字表示相对单位以便于子元素继承相对行高。
* 修改`css`文件，修改`accordion`节点的圆角为`r-input`。
* 修改`css`文件，增加`_lh-sm`、`_lh-md`和`_lh-lg`样式类（可能不能对齐像素）。
* 修改`css`文件，增加`_fw-*`字重样式类。
* 全局修改，将`rep=caption`改成`rep=title`。
* 修改`callout`组件，将`caption`属性改成`label`。
* 修改`css`文件，将`-lit`替换为`-lt`。

## 2025-05-17更新
### 发布v3.1.15版本
* 核心js：https://unpkg.com/@codady/axui@3.1.15/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.15/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.15/dist.zip
### 更新内容
* 修改`css`文件字体部分，增加`rtl`和`ltr`图标字体。
* 修改`css`文件字体部分，更换`twitter`的图标字体。
* 修改`css`文件字体部分，增加若干国际社交平台图标字体。
* 修改`css`文件字体部分，增加跨境支付图标字体。
* 修改`format`组件，增加对数字格式化的支持。
* 修改`format`组件，删除info和tips属性，改用`prefix`和`suffix`属性，增加`localenum`、`plainnum`、`padstart`和`padend`类型，并增加`places`和`locale`属性。

## 2025-05-16更新
### 发布v3.1.14版本
* 核心js：https://unpkg.com/@codady/axui@3.1.14/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.14/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.14/dist.zip
### 更新内容
* 修复多个表单域组件，使其`full`属性在flex布局的父节点下也可以100%铺满。
* 将`Tab`组件设为`position:relative`定位方式，允许切换头可以绝对定位。
* 修改`AXUI`官网首页，替换实时代码展示，新增组件示例演示。


## 2025-05-15更新
### 发布v3.1.13版本
* 核心js：https://unpkg.com/@codady/axui@3.1.13/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.13/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.13/dist.zip
### 更新内容
* 修复`alarm`组件的css，使行垂直居中。
* 修复`textarea`组件，使`full`属性生效。
* 修改`masonry`模块的`cols`参数，使之支持终端自适应。
* 修复`getScreenSize`函数获取css变量的错误。
* 修复`search`组件在使用append方法时内容为空的问题。
* 修复`menu`组件在使用append方法时badge为空的问题。
* 修改了`display=inline`的`Datetime`模块的节点结构，将表单域和面板放在同一个节点中。
* 修复`Datetime`组件的`full`属性无效问题。
* 修复`Twilight`组件在append操作后失效的问题。


## 2025-05-14更新
### 发布v3.1.12版本
* 核心js：https://unpkg.com/@codady/axui@3.1.12/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.12/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.12/dist.zip
### 更新内容
* 修复`Dialog`模块在可拖拽的时候，位置飘忽不定的问题。
* 修正`Popup`和`Dialog`气泡窗口的默认宽度，设置为与文本域input的宽度相同。
* 修正`Datetime`模块，在其填值时，对原生input使用el.value方法。
* 修改`Drawer`和`Dialog`模块，增加`multiple`参数，默认true。
* 修复`Datetime`模块在链式赋值时，使用`drawer`窗口无法切换弹出的问题。


## 2025-05-13更新
### 发布v3.1.11版本
* 核心js：https://unpkg.com/@codady/axui@3.1.11/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.11/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.11/dist.zip
### 更新内容
* 将函数`regElem`修改为`regComp`，以区别于其他组件命名方式。
* 对有依赖的组件增加`dependences`静态变量。
* 修改`regComp`函数，以支持对组件的依赖优先注册。

## 2025-05-12更新
### 发布v3.1.8版本
* 核心js：https://unpkg.com/@codady/axui@3.1.8/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.8/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.8/dist.zip
### 更新内容
* 修改`prompt`函数，增加了`insName`和`dialog`参数。
* 修改`alert`函数和`notice`函数，增加了`dialog`参数。
* 修改`edtor`模块的样式，确保以100%宽度显示。
* 修改`prompt`类型气泡的样式，取消遮罩层。
* 修复带实例的组件异步插入页面时无效的问题，包括datetime、range、upload等组件。
* 修复`Popup`模块的`multiple`参数无效的问题。
* 修复`createEl`函数，确保添加属性符合预期，例如添加对象属性{a:1}，最终转成`'{"a":1}'`。
* 对所有class类的参数增加`rtl`属性。
* 将公用的class类追加了`abstract`标识符，禁止实例化。
* 对所有webcomponent组件使用了`this.canListen`变量，用来阻止属性监听。
* 修改了所有带实例的组件，确保`connected`时，在所有属性更新完毕才执行实例初始化。


## 2025-05-10更新
### 发布v3.1.7版本
* 核心js：https://unpkg.com/@codady/axui@3.1.7/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.7/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.7/dist.zip
### 更新内容
* 对内置的`none`图片，去掉了“暂无图片”中文字样，在多语环境下更加通用。
* 修改`Bubble`气泡模块，将参数`padding`改为`{enable,body,foot}`。
* 修复`checkboxes`和`radios`模块属性`content`解析字符串为空的问题。
* 修复`checkboxes`的全选按钮无效的问题。
* 新增`checkboxes`全选按钮的形式，单个checkbox和radio也可全选。
* 修改checkbox中`type=switch`的样式，改小了尺寸。
* 修改`checkbox`组件，新增`lang.on`和`lang.off`属性，在type=switch时可能需要。
* 修复`fieldTools.getVals`方法从`radio`和`checkbox`取值失败的问题。
* 修复`Valid`模块对自定义表单组件的支持缺陷。
* 修改`apart`类型`field`表单域布局，当没有label和help节点时取消上下margin。
* 修改`InputElem`组件，增加`feature=sign`特色类型。
* 修改`TextareaElem`组件，增加`feature=plain`特色类型。
* 修正`Datetime`模块/组件宽度溢出的错误。
* 修改`Dialog`和`Popup`模块的最大高度，确保超多内容时可滚动显示。
* 修改`Popup`模块，在移动端将`hover`触发方式自动修正为`click`。
* 删除`getClientType`、`ceils`、`isMobi`、`getFullGap`、`curveVals`、`prfix`、`alias`、`getImg*`等函数。
* 修复`ajax`函数关于重复请求部分的错误逻辑。
* 修复模块之间循环引用的错误。
* 修复`Popup`模块，在手机端自适应时，`left-max`和`right-max`自动转成`top-max`和`bottom-max`。
* 缩小`Datetime`模块在手机端中日期单元格的尺寸，以确保在手机端至少可以完整显示两个面板。


## 2025-04-29更新
### 发布v3.1.0版本
* 核心js：https://unpkg.com/@codady/axui@3.1.0/dist/js/ax.js
* 核心css：https://unpkg.com/@codady/axui@3.1.0/dist/css/ax.css
* 打包文件：https://unpkg.com/@codady/axui@3.1.0/dist.zip
### 更新内容
* 对应用本框架模块的节点增加`ax`属性用来存放于axui相关的数据；其为一个对象，包含modules，flip，spy等属性；一个节点应该只应用一次相同的模块。
* 将`elProps`函数改为`storeNode`，用来给节点存放于本框架相关的数据。
* 修改全站`css`以支持`RTL`（阿拉伯语/希伯来语排版要求）。
* 增加`--_dir-coef`变量，以便在样式中计算`rtl`布局中的样式。
* 改小`legend`标签字号，并固定字号`12px`。
* 修改`_ratio-*`比例连接符，比如16-9改为16x9，更加直观；并新增若干比例。
* 增加`getRtl`函数，用来获取当前页面是否是`rtl`行文模式。
* 增加`setRtl`函数，用来设置页面使用`rtl`行文模式。
* 适配了`Virtualize`模块在`rtl`行文模式下的水平虚拟滚动。
* 允许对`Scroll`和`Swipe`模块节点增加`dir=rtl`属性，允许局部rtl。
* 修改`Rate`、`Range`和`Scroll`模块，增加`rtl`参数。
* 在样式中，将方向性的属性`l`（left）和`r`（right）改成`s`（start）和`e`（end），lr改成se，修改范围包含了p、m、r、bd系列样式类和css变量名。
* 修改`ax-defrom`组件，将`menuLeft`改为`manuStart`；`menuRight`改为`menuEnd`。
* 修改`_a-*`排序相关样式类，l（left）改为s（start），r（right）改为e（end），lt改为st等。
* 修改包含`left`和`right`的动画名，例如fadeInLeft改为fadeInStart，_fadeInRight改为_fadeInEnd等。
### 里程碑
本版本迈出国际化的重要一步：支持RTL行文模式。可将本框架应用在阿拉伯语/希伯来语项目中。


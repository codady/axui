# Changelog更新历史

关于AXUI的新增、修改和删除记录均在本文档记录。

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


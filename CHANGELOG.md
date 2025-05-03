# Changelog更新历史

关于AXUI的新增、修改和删除记录均在本文档记录。

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


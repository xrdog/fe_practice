/* 用于配合less-loader覆盖antd中的变量来进行主题定制 */
module.exports = {
  // 定制配色
  '@menu-dark-inline-submenu-bg': '#252c46',
  '@primary-color': '#ff9100',
  '@info-color': '#1890ff',
  '@success-color': '#04ca9a',
  '@error-color': '#fe5500',
  '@warning-color': '#ff9100',
  '@processing-color': '#ff9100', // progress-bar默认颜色
  '@highlight-color': '#fe5500', // 只在badge组件徽标数 和  表单必填项上使用,与error-color保持一致即可
  '@link-color': '#1890ff', // 文字链接颜色
  '@html-selector': '@info-color', // 选取文字区域高亮颜色
  '@black': '#000', // 黑色
  '@disabled-color': 'fade(#000, 25%)',
  '@shadow-2':
    '0 5px 12px 4px rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 2px -2px rgba(0, 0, 0, 0.16);',
  '@text-selection-bg': '@info-color', // 选中内容颜色
  // 排版样式

  // 中文字体
  '@font-family':
    // eslint-disable-next-line max-len
    "PingFangSC, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  // 英文字体
  '@code-family':
    "Consolas, 'SFMono-Regular', 'Liberation Mono', Menlo, Courier, monospace", // 代码字体
  '@font-variant-numeric': "'Helvetica Neue', tabular-nums", // 数字字体
  '@text-color': 'fade(@black, 65%)', // 基本文字颜色
  '@input-icon-color': '@disabled-color', // 输入框前置图标颜色
  '@label-color': 'rgba(0,0,0,0.85)', // Form.item label颜色
  '@typography-title-font-weight': '500', // 标题字体加粗

  // 布局样式

  '@layout-header-height': '48px', // 顶栏行高
  '@layout-body-background': '#F5F5F5', // layout背景色
  '@layout-header-background': '#FFF', // 顶栏背景色
  '@layout-header-padding': '0 32px', // 顶栏padding
  '@layout-sider-background': '#252c46', // 侧边栏背景色
  '@layout-footer-padding': '12px 24px', // 页脚内补白
  '@layout-footer-background': '#fff', // 页脚背景色
  '@menu-dark-bg': '#252c46', // 一级菜单背景色
  '@menu-dark-submenu-bg': '#252c46', // 二级菜单背景色
  '@menu-dark-highlight-color': '@primary-color', // 激活时文字颜色
  '@menu-dark-item-active-bg': 'rgba(255,255,255,0.12)', // 激活时背景色
  '@menu-dark-selected-item-icon-color': '@primary-color', // 一级菜单icon颜色
  '@menu-dark-selected-item-text-color': '@primary-color', // 一级菜单text颜色
  '@tabs-card-height': '46px', // tabs栏高度

  // PageHeader组件

  '@page-header-ghost-bg': '#fff', // 页头背景

  // 组件样式

  '@radio-wrapper-margin-right': '24px', // radio选项水平间距
  '@checkbox-group-item-margin-right': '24px', // checkbox选项水平间距
  '@switch-color': '@success-color', // Switch开关颜色
  '@switch-min-width': '44px', // Switch开关宽度

  // table表格样式
  '@table-header-bg': '#fafafa', // 表头背景色

  // tabs
  '@tabs-bar-margin': '0', // tabs顶栏底部外边距

  // card
  '@card-head-font-size': '18px' // 卡片头部标题大小
};

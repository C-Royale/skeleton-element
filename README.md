# skeleton-element

基于 `vue-cli3` 创建的 UI 业务组件库

# Install

```bash
npm i element-ui -S // 依赖 element-ui 基础组件库

npm i sk-element -S

```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SKElement from "skeleton-element";
//import locale from "skeleton-element/dist/locale/lang/en"; // 支持多语言

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(SKElement);
// Vue.use(SKElement, { locale });

```

## Browser Support
Modern browsers and Internet Explorer 9+.

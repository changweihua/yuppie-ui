// index.ts
import type { App } from 'vue'
import Panel from "./Panel.vue"

// 使用install方法，在app.use挂载
Panel.install = (app: App) => {
    app.component(Panel.__name as string, Panel) //注册组件
}
  
export default Panel

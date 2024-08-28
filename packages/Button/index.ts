// index.ts
import type { App } from 'vue'
import MyButton from "./Button.vue"

// 使用install方法，在app.use挂载
MyButton.install = (app: App) => {
    app.component(MyButton.__name as string, MyButton) //注册组件
}
  
export default MyButton

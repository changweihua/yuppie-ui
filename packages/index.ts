//index.ts
import type { App } from 'vue'
import MyButton from './Button'
import Panel from './Panel'

// 所有组件列表
const components = [
  MyButton,
  Panel
]

// 定义 install 方法
const install = (app: App): void => {
  // 遍历注册所有组件
  /*
    component.__name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.

    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(component.__name) 或 as语法(component.__name as string)
  */
  components.forEach(component => app.component(component.__name as string, component))
}

export {
  MyButton,
  Panel
}

const YuppieUI = {
  install
}

export default YuppieUI

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module "vue" {
    export interface GlobalComponents {
      MyButton: typeof MyButton
      Panel: typeof Panel
    }
}

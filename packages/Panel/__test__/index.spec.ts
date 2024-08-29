// __test__/index.spec.ts
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Panel from '../Panel.vue'
describe('Panel', () => {
  test('挂载组件', async () => {
    expect(Panel).toBeTruthy()

    const wrapper = mount(Panel, {
      props: {
        // name: "LanceChang",
        // age: 33,
        user: 'Lance Chang'
      }
    })

    // 确认是否渲染了 `message`
    expect(wrapper.find('.user').text()).toEqual('user: Lance Chang')

    // 断言渲染了错误信息
    expect(wrapper.find('.name').exists()).toBeTruthy()

    // 更新 `username` 并断言错误信息不再被渲染
    await wrapper.setProps({ name: 'name: Changweihua' })

    expect(wrapper.find('.age2').exists()).toBeFalsy()
  })
})

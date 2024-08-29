// __test__/index.spec.ts
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Button from "../Button.vue";

describe("Button", () => {
  test("renders a message and responds correctly to user input", async () => {
    const wrapper = shallowMount(Button, {
      props: {
        count: 4
      },
    });
      
    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("4 x 3 = 12");

    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("4 x 4 = 16");
  });
});

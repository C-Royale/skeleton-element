import { shallowMount } from "@vue/test-utils";
import Text from "@/components/text";

describe("SkText.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Text, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

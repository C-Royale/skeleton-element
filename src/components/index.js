import Record from "./record";
import Text from "./text";

const components = [Record, Text];

const install = function(Vue) {
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Record,
  Text
};

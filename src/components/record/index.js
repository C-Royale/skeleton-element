import Record from "./src/main";

/* istanbul ignore next */
Record.install = function(Vue) {
  Vue.component(Record.name, Record);
};

export default Record;

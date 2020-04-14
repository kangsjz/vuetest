import {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Dialog,
  Row,
  Col,
  Form,
  FormItem
} from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    Vue.use(Input);
    Vue.use(Tree);
    Vue.use(Dialog);
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(FormItem);

    Vue.use(Form);
  }
};
export default element;

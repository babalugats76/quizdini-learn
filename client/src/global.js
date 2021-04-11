import LayoutSinglePage from "@/layouts/LayoutSinglePage";

const components = [LayoutSinglePage];

export default {
  install: (app, options) => {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};

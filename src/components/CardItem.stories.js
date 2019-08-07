import { storiesOf } from "@storybook/vue";

import CardItem from "./CardItem";

storiesOf("CardItem", module).add("default", () => {
  return {
    components: { CardItem },
    template: `<card-item />`
  };
});

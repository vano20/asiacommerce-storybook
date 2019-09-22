import { storiesOf } from "@storybook/vue";

import MyProductStory from "../stories/MyProductStory.vue";

storiesOf("My Product", module).add("Summary product", () => ({
  render: h => h(MyProductStory)
}));

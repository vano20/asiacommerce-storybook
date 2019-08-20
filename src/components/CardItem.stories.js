import { storiesOf } from "@storybook/vue";

import CardItem from "./CardItem";

// storiesOf("CardItem", module).add("default", () => {
//   return {
//     components: { CardItem },
//     template: `<card-item />`
//   };
// });

storiesOf("CardItem", module)
  .add("default", () => "<card-item />")
  // .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
  .add("as a component", () => ({
    components: { CardItem },
    template: "<card-item />"
  }));

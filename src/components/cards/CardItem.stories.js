import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import CardItem from "./CardItem";

export const item = {
  id: "1",
  title: "Picking up some small pebbles, he dropped them into the pitcher one by one",
  seller: "Seller name should be here",
  price: 94415.532,
  hotProduct: false,
  imported: false,
  importingToProduct: false
};

export const methods = {
  onImportedItem: action("onImported")
}

// storiesOf("CardItem", module).add("default", () => {
//   return {
//     components: { CardItem },
//     template: `<card-item />`
//   };
// });

storiesOf("CardItem", module)
  .add("Default", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: {
        ...item,
        hotProduct: true,
        imported: true
      }
    })
  }))
  .add("Stateless", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: { ...item }
    })
  }))
  .add("Hot Product", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: {
        ...item,
        hotProduct: true,
        seller: "Catty"
      }
    })
  }))
  .add("Imported", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: {
        ...item,
        imported: true,
        seller: "Cats",
        price: 10000.422
      }
    })
  }))
  .add("Importing", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: {
        ...item,
        seller: "Cats",
        price: 10000.422,
        importingToProduct: true
      }
    })
  }));

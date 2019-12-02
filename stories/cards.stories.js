import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import CardItem from "../src/components/cards/CardItem";

export const item = {
  id: "1",
  name: "Picking up some small pebbles, he dropped them into the pitcher one by one",
  seller: "Seller name should be here",
  image: "http://placekitten.com/g/600/600",
  original_price: 94415.532,
  priceOld: 124533.53,
  hotProduct: false,
  imported: false,
  importingToProduct: false,
  wholesale: false
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
  .add("Wholesale product", () => ({
    components: { CardItem },
    template: "<card-item :item='item' />",
    data: () => ({
      item: {
        ...item,
        wholesale: true
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
  }));

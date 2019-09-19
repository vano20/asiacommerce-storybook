import { storiesOf } from "@storybook/vue";

import { BaseButton, ButtonGroup } from "../src/components/ui/Buttons";

storiesOf("Buttons", module)
  .add("default", () => ({
    components: { BaseButton },
    template: `
    <div class="bg-red-100 p-4">
      <div class="mb-2">
        <div class="label">label Default</div>
        <div class="block font-size-lg pb-1">Base button</div>
        <base-button>Default</base-button>
        <base-button is-pill>Is Pill</base-button>
        <base-button href="#">Anchor with href</base-button>
        <base-button variant="primary">Primary</base-button>
        <base-button variant="accent" href="#">accent</base-button>
        <base-button variant="success" href="#">Success</base-button>
        <base-button variant="info" href="#">info</base-button>
        <base-button variant="danger" href="#">danger</base-button>
        <base-button is-link href="#">danger</base-button>
      </div>
      <div class="mt-4">
        <div class="block font-size-lg pb-1">Base 'solid' button</div>
        <base-button is-solid>Default Solid &/ Primary Solid</base-button>
        <base-button is-solid variant="PriMary" href="#">Anchor with href</base-button>
        <base-button is-solid variant="success" href="#">Success</base-button>
        <base-button is-solid variant="info" href="#">info</base-button>
        <base-button is-solid variant="danger" href="#">danger</base-button>
        <base-button is-solid variant="accent" href="#">accent</base-button>
        </div>
        <div>
        <div class="block font-size-lg pb-1">Size</div>
        <base-button size="small" href="#">Small</base-button>
        <base-button size="medium" href="#">Medium</base-button>
        <base-button size="large" href="#">Large</base-button>
        <base-button size="huge" href="#">Huge</base-button>
      </div>
      

    </div>
  `
  }))
  .add("Button Group", () => ({
    components: { BaseButton, ButtonGroup },
    template: `
    <div class="bg-red-100 p4">
      <button-group>
        <base-button>Base</base-button>
        <base-button variant="success">Base</base-button>
      </button-group>
    </div>
  `
  }));

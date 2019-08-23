import { storiesOf } from "@storybook/vue";

import OurButton from "./Button";

storiesOf("OurButton", module).add("default", () => ({
  components: { OurButton },
  template: `
    <div class="bg-red-100 p-4">
      <div class="mb-2">
        <div class="block font-size-lg pb-1">Base button</div>
        <our-button>Default</our-button>
        <our-button href="#">Anchor with href</our-button>
        <our-button variant="primary">Primary</our-button>
        <our-button variant="accent" href="#">accent</our-button>
        <our-button variant="success" href="#">Success</our-button>
        <our-button variant="info" href="#">info</our-button>
        <our-button variant="danger" href="#">danger</our-button>
      </div>
      <div class="mt-4">
        <div class="block font-size-lg pb-1">Base 'solid' button</div>
        <our-button is-solid>Default Solid &/ Primary Solid</our-button>
        <our-button is-solid variant="PriMary" href="#">Anchor with href</our-button>
        <our-button is-solid variant="success" href="#">Success</our-button>
        <our-button is-solid variant="info" href="#">info</our-button>
        <our-button is-solid variant="danger" href="#">danger</our-button>
        <our-button is-solid variant="accent" href="#">accent</our-button>
        </div>
        <div>
        <div class="block font-size-lg pb-1">Size</div>
        <our-button size="small" href="#">Small</our-button>
        <our-button size="medium" href="#">Medium</our-button>
        <our-button size="large" href="#">Large</our-button>
        <our-button size="huge" href="#">Huge</our-button>
      </div>
      <div class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 ">
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-xs</p>
          <p class="text-xs truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-sm</p>
          <p class="text-sm truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-base</p>
          <p class="text-base truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-lg</p>
          <p class="text-lg truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-xl</p>
          <p class="text-xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-2xl</p>
          <p class="text-2xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-3xl</p>
          <p class="text-3xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-4xl</p>
          <p class="text-4xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p></div> <div><p class="text-sm text-gray-600">.text-5xl</p> <p class="text-5xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p></div> <div><p class="text-sm text-gray-600">.text-6xl</p> <p class="text-6xl truncate text-gray-800">The quick brown fox jumped over th
        e lazy
        dog.</p></div></div>

    </div>
  `
}));

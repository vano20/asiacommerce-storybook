import { storiesOf } from "@storybook/vue";

import {
  InputText,
  InputGroup,
  InputNumber
} from "../src/components/ui/Inputs";
import { BaseButton } from "../src/components/ui/Buttons";
import InputGroupStory from "../stories/InputGroupStory.vue";

storiesOf("Inputs", module)
  .add("default", () => ({
    components: { InputText, BaseButton },
    template: `
    <div class="bg-red-100 p-4">
      <input-text size="small" placeholder="Testing placeholder" value="halooo" />
      <input-text />
      <input-text size="large" />
      <base-button>Button</base-button>
    </div>
  `
  }))
  .add("Input Group", () => ({
    render: h => h(InputGroupStory)
  }))
  .add("Input Number", () => ({
    components: { InputNumber },
    data() {
      return {
        initValue : 0,
        stackedValue: 2
      }
    },
    template: `
    <div>
      <p>paragraph</p>
      <input-number
        :min="0"
        v-model="initValue"
      />
      <div class="block mt-4">
        <label class="block"> Stacked input number </label>
        <input-number
          v-model="stackedValue"
          is-stacked
        />
      </div>
    </div>
    `
  }));
